import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, ROUTES } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  catName = "";
  temp = "ERIC";

  constructor(private routes: ActivatedRoute) { 

  }

  getCatName () {
    this.catName = this.routes.params['name'];
    this.temp = "Cathy";
  }

  ngOnInit() {
    console.log("here" + this.routes);
    this.getCatName();
    
  }

}
