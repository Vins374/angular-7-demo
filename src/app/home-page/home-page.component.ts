import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

	public data = [];
	public status = false;

  constructor() { 
  	let data = localStorage.getItem("data");
  	if(data == null)
  		this.data = [];
  	else {
  		this.data = JSON.parse(data);
  		this.status = true;
  	}
  }

  ngOnInit() {
  }

  funDelete(index)
  {
  	console.log(index);
  	this.data.splice(index, 1);
  	localStorage.setItem("data",JSON.stringify(this.data));
  }

}
