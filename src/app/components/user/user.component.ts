import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name:string='wutongyue';
address:any={
	name:'nihao yuzhou'
};
arr=[];
hello:any;
ngM:string;
isBoo=true;
  constructor() { 
    
     
  }

  ngOnInit() {
 
	 
  	 this.arr=[
  		{
  			id:'1',
  			name:'wutongyue'
  		},
  		{
  			id:'2',
  			name:'lowingshan'
  		},
  	 ]
  	 

  }
  doSome(data){
  	console.log(data.value)
  	this.arr.push({id:'3',name:'wutongyue'})
  }
  edit(){
     
  	this.isBoo=!this.isBoo
  }

}

interface Address{
	street:string,
	city:string,
	state:string
}
