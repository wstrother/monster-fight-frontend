import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: User | null = null;

  constructor(private users: UserApiService) {}

  ngOnInit(): void {
    console.log("navbar subscribed");
    this.users.getCurrentUser().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  logout(): void {
    this.users.logout();
  }
}
