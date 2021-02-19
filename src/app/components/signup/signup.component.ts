import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username: string = "";
  password: string = "";
  confirmPassword: string = "";
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

    if (this.username.length < 5 || this.username.length > 30) {
      this.setFlash("Username must be between 5 and 30 charaters", "error");
      return false;
    }

    if (this.password.length < 5) {
      this.setFlash("Password must be at least 5 characters and contain at least one uppercase, lowercase, numeral and symbol", "error");
      return false;
    }

    if (this.password != this.confirmPassword) {
      this.setFlash("Confirm Password field does not match Password", "error");
      return false;
    }

    return true;
  }

  submit(): void {
    if (this.validate()) {
      this.setFlash("One moment...", "waiting");
      this.users.signup(this.username, this.password).subscribe(

        data => {setTimeout(() => {
            this.setFlash(`Thanks for signing up, ${data.username}!`, "success");
            this.users.login(this.username, this.password).subscribe();
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
