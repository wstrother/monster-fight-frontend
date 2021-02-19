import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private baseApiUrl: string = 'http://localhost:5000/';
  private usersEnd: string = 'users';
  private loginEnd: string = "login";
  private signupEnd: string = "new_user";
  private tokenEnd: string = "check_token";
  
  private currentUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public tokenChecked: Boolean = false;


  constructor(private http: HttpClient) {
    this.setCurrentUser();
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }
  
  setCurrentUser(): void {
    let token = this.getTokenFromStorage();

    if (token) {
      this.check_token(token).subscribe(

        (data) => {
          let user = this.getUserFromStorage();
          if (user) {
            this.tokenChecked = true;
            this.currentUser.next(user);
          }
        },
        
        (error) => {
          localStorage.removeItem("token");
          this.tokenChecked = true;
          this.currentUser.next(null);
        }
      );
    } else {
      this.tokenChecked = true;
      this.currentUser.next(null);
    }
  }

  getTokenFromStorage(): string | null {
    return localStorage.getItem("token");
  }

  getUserFromStorage(): User | null {
    let userItem = localStorage.getItem("user");
    let user = null;

    if (userItem) {user = new User(JSON.parse(userItem))}

    return user;
  }

  // HTTP methods

  getAuthHeader(username: string, password: string): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`
      })
    }
  }

  getTokenHeader(token: string): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
      })
    }
  }

  handleError(resp: HttpErrorResponse) {
    console.log(resp);
    return throwError(resp.error.error);
  }
  
  // API methods

  getUsersList(): Observable<User[]> {
    let url = `${this.baseApiUrl}${this.usersEnd}`;

    return this.http.get<User[]>(url).pipe(
      map(data => data.map(data => new User(data))),
      catchError(this.handleError)
    );
  }

  signup(username: string, password: string): Observable<any> {
    let url = `${this.baseApiUrl}${this.signupEnd}`;
    let options = this.getAuthHeader(username, password);

    return this.http.post(url, {}, options).pipe(
      map(data => { return data; }),

      catchError(this.handleError)
    )
  }

  login(username: string, password: string): Observable<any> {
    let url = `${this.baseApiUrl}${this.loginEnd}`;
    let options = this.getAuthHeader(username, password);

    return this.http.post<any>(url, {}, options).pipe(
      map(
        data => {
          let user = new User(data);
          this.currentUser.next(user);

          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(user));

          return data;
        }
      ),

      catchError(this.handleError)
    );
  }

  logout(): void {
    this.currentUser.next(null);
    localStorage.clear();
  }

  check_token(token: string): Observable<any> {
    let url = `${this.baseApiUrl}${this.tokenEnd}`;
    let options = this.getTokenHeader(token);

    return this.http.get<any>(url, options).pipe(
      map(
        data => {return data;}
      ),

      catchError(this.handleError)
    );
  }

}
