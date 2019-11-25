import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  devs:Developer[];
  constructor() { }

  loadDeveloper():void{
   this.devs = [
     new Developer("Jason","Monroe","C#",2008),
     new Developer("Bill","Gates","BASIC",1970)
   ];
  }

  ngOnInit() {
    this.loadDeveloper();
  }

}
