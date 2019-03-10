import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-line-details',
  templateUrl: './additional-line-details.component.html',
  styleUrls: ['./additional-line-details.component.css']
})
export class AdditionalLineDetailsComponent implements OnInit {

  icon: string = "-"

  show: boolean = true;

  toggleAdditionalDetails() {
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
