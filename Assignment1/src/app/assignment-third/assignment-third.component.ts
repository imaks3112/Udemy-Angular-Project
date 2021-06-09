import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-third',
  templateUrl: './assignment-third.component.html',
  styleUrls: ['./assignment-third.component.css']
})
export class AssignmentThirdComponent implements OnInit {
  displayPassowrd = false;
  logs = [];
 
  constructor() { }

  ngOnInit(): void {
  }
  DisplayPass() {
    this.displayPassowrd = !this.displayPassowrd;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());

  }
}
