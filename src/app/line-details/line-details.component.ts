import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-details',
  templateUrl: './line-details.component.html',
  styleUrls: ['./line-details.component.css']
})
export class LineDetailsComponent implements OnInit {

  icon: string = "-"

  show: boolean = true;

  toggleLineDetails() {
    this.show = !this.show;
    if (this.show)
      this.icon = "-";
    else
      this.icon = "+";
  }

  constructor() { }

  ngOnInit() {
  }

}
