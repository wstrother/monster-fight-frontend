import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  flash: string = "";
  flashClass: string = "";

  constructor(private users: UserApiService) { }

  ngOnInit(): void {
  }

  setFlash(message: string, cls: string) {
    this.flash = message;
    this.flashClass = `flash-${cls}`;
  }

  validate(): boolean {
    if (!this.username || !this.password) {
      this.setFlash("Username and Password are both required", "error");
      return false;
    }

    return true;
  }

  submit(): void {
    if (this.validate()) {
      this.setFlash("One moment...", "waiting");
      this.users.login(this.username, this.password).subscribe(
        
        data => {setTimeout(() => {
            this.setFlash(`Thanks for logging in, ${data.username}!`, "success");
          }, 500);
        },
  
        error => {setTimeout(() => {
            this.setFlash(error, "error");
          }, 500)
        }
      )
    }
  }
}
