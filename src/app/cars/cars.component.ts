import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
	carcatList = [
		{name:"Maruti"},
		{name:"Ford"},
		{name:"TATA"},
		{name:"Mahindra"}
	]

  constructor() { }

  ngOnInit() {
  }

}
