import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

	
 	public persondata = [];
 	constructor(private myservice: MyserviceService) {} 

  	ngOnInit(): void {
  		this.myservice.getData().subscribe((data) => {
 		this.persondata = Array.from(Object.keys(data), k=>data[k]);
 		console.log(this.persondata);
	 });
  }

}
