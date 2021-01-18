import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-bottom-div',
  templateUrl: './bottom-div.component.html',
  styleUrls: ['./bottom-div.component.scss']
})
export class BottomDivComponent implements OnInit {
  message: string = "not sent yet";

  constructor(private msg: MessagesService) { }

  ngOnInit(): void {
    this.msg.getMessage().subscribe(
      msg => {
        console.log(msg);
        this.message = msg;
      }
    )
  }

}
