import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AgevalService {

  constructor() { }

  agecontrol(control: FormControl){
    const value: number = control.value;
    if( value < 18 || value > 65 ){
      return {
        agecontrol: true
      }
    }
    return null;
  }

}
