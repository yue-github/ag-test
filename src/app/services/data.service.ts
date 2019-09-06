import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataService{
	users:string[];
	data:Observable<Array<number>>;
	boo=true;
	obj={};
	constructor(){
		console.log(this.boo)
		this.users=['tyes','哈哈']
	}
	getUsers(){
		// this.data=new Observable(observer=>{
		// 	observer.next(this.boo)
		// })
		// return this.data;
	}
	 

  
  

   
}