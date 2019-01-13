import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

	public name='';
	public email='';
	public mobile='';
	public error=false;
	public errorMsg = '';
	public data=[];

  constructor(public router:Router) { 
  	let data = localStorage.getItem("data");
  	if(data == null)
  		this.data = [];
  	else 
  		this.data = JSON.parse(data);

  	console.log(this.data);
  }

  ngOnInit() {
  }

  funCreate()
  {
  	this.error = false;
  	this.errorMsg = "";
  	console.log("working");
  	if(this.name == '' || this.email == '' || this.mobile == ''){
  		this.error = true;
  		this.errorMsg = "Please enter the details";
  	}
  	else {
  		let details = { name: this.name , email: this.email, mobile: this.mobile };
  		console.log(details);
  		this.data.push(details);
  		localStorage.setItem("data",JSON.stringify(this.data));
  		this.router.navigate(['/'])
  	}
  }

}
