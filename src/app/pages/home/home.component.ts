import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User | null = null;
  tokenChecked: Boolean = true;
  private userSubscription$!: Subscription;

  constructor(private users: UserApiService) {}

  ngOnInit(): void {
    this.userSubscription$ = this.users.getCurrentUser().subscribe(
      (user) => {
        this.user = user;
        this.tokenChecked = this.users.tokenChecked;
      }
    );
  }

  ngOnDestroy(): void {
    this.userSubscription$.unsubscribe();
  }

}
