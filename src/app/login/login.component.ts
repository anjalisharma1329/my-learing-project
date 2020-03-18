import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	locations = ['Delhi', 'Noida', 'Gurgaon'];

	loginData(data){
		alert (data.emailid);
		alert(data.pwd)
	}



  	constructor(private myservice: MyserviceService) {}

  	ngOnInit(): void {
  	}

}
