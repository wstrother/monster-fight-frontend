import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private subject: Subject<string> = new Subject();

  constructor() { }

  sendMessage(msg: string) {
    console.log("a message was sent... calling subject.next()");
    this.subject.next(msg);
  }

  getMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
