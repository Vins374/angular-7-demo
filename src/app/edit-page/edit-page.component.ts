import { Component, OnInit } from '@angular/core';
import {Router,Route} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

	public name='';
	public email='';
	public mobile='';
	public error=false;
	public errorMsg = '';
	public data=[];
	public current:any;
	public index:any;

  constructor(public route:ActivatedRoute,public router:Router) { 

  	this.route.params.subscribe(params => { 
  		let data = localStorage.getItem("data");
	  	if(data == null)
	  		this.data = [];
	  	else {
	  		this.data = JSON.parse(data);
	  		console.log(this.data[params.id]);

	  		this.index = params.id;

	  		this.current = this.data[params.id];
	  		this.name = this.current.name;
	  		this.email = this.current.email;
	  		this.mobile = this.current.mobile;
	  	}
  	});
  }

  ngOnInit() {
  }

  funEdit()
  {
  	this.error = false;
  	this.errorMsg = "";
  	console.log("working");
  	if(this.name == '' && this.email == '' && this.mobile == ''){
  		this.error = true;
  		this.errorMsg = "Please enter the details";
  	}
  	else {
  		let details = { name: this.name , email: this.email, mobile: this.mobile };
  		console.log(details);
  		// this.data.push(details);
  		this.data[this.index] = details;
  		localStorage.setItem("data",JSON.stringify(this.data));
  		this.router.navigate(['/'])
  	}
  }

}
