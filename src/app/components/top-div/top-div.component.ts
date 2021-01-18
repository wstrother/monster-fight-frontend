import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-top-div',
  templateUrl: './top-div.component.html',
  styleUrls: ['./top-div.component.scss']
})
export class TopDivComponent implements OnInit {

  constructor(private msg: MessagesService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    console.log("button clicked");
    this.msg.sendMessage("The button was clicked");
  }
}
