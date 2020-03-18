import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

	isShowHide = true;

	ifelsefunction(event){
		this.isShowHide = !this.isShowHide;
	}

	constructor() { }

  	ngOnInit(): void {
  	}

}
