import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, ROUTES } from '@angular/router';

interface catName {
  name: string;
}

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  catName ="";
  //temp = "ERIC";

  constructor(private routes: ActivatedRoute) { 

  }

  getCatName () {
    //this.catName = this.routes.params['name'];
    //this.catName = this.routes.queryParams.subscribe(params => this.catName = params[];)
    //this.catName=this.routes.params.subscribe( params => params.name);
    this.routes.params.subscribe( params => console.log(params['name']) );
    this.routes.params.subscribe( params => this.catName=(params['name']) )
    console.log("catName:" + this.catName);
    //this.temp = "Cathy";
  }

  ngOnInit() {
    this.getCatName();
    
  }

}
