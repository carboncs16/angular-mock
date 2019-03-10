import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-field',
  templateUrl: './top-field.component.html',
  styleUrls: ['./top-field.component.css']
})
export class TopFieldComponent implements OnInit {
  total = 100;
  orderFee = 70;
  curr = "USD";
  constructor() { }

  ngOnInit() {
  }

}
