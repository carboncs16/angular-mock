import { Component, OnInit, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    InputTextModule
  ]
})

@Component({
  selector: 'app-po-details',
  templateUrl: './po-details.component.html',
  styleUrls: ['./po-details.component.css']
})
export class PoDetailsComponent implements OnInit {

  text1: string = "";

  icon: string = "-"

  show: boolean = true;

  togglePO() {
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
