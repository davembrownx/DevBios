import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  devs:Developer[];
  constructor(
    private developerService:DeveloperService
  ) { }

  loadDeveloper():void{
   this.devs = this.developerService.getAllDevelopers();
  }

  ngOnInit() {
    this.loadDeveloper();
  }

}
