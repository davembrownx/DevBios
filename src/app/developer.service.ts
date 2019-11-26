import { Injectable } from '@angular/core';
import { Developer } from './developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  
  devs:Developer[];
  constructor() { 
    this.devs = [
      new Developer(1,"Jason","Monroe","C#",2008),
      new Developer(2,"Bill","Gates","BASIC",1970)
    ];
  }
  
  getAllDevelopers(): Developer[] {
    return this.devs;
  }

  getDeveloperById(devId: number): Developer {
    return this.devs.find(dev=>dev.id==devId)
  }
}
