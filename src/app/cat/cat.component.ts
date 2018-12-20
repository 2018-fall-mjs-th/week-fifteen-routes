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

  catName ='';

  constructor(private routes: ActivatedRoute) {

  }

  getCatName () {
    this.routes.params.subscribe( params => console.log(params['name']) );
    this.routes.params.subscribe( params => this.catName = (params['name']) );
    console.log(this.catName);
  }

  ngOnInit() {
    this.getCatName();

  }

}
