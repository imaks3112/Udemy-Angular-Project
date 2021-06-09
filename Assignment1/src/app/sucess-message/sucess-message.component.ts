import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucess-message',
  templateUrl: './sucess-message.component.html',
  styleUrls: ['./sucess-message.component.css']
})
export class SucessMessageComponent implements OnInit {
  // name = 'Akshay';
  // isDisabled = false;
  // serverStatus = 'Unable to create server';
  // serverName = 'Testing';

  // constructor() {
  //   setTimeout(() => {
  //     this.isDisabled = true;
  //   }, 2000)
  //  }

  // ngOnInit(): void {
  // }

  // onCreateServer() {
  //   this.serverStatus = 'Created the server' + this.serverName;
  // }

  // onUpdateServer(evt: Event) {
  //   this.serverName = (<HTMLInputElement>evt.target).value;
  // }


  userName = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  resetUser() {
    
  }

}
