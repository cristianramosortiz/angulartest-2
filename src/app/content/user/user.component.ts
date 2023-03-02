import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AgevalService } from 'src/app/service/validations/ageval.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [

  ]
})


export class UserComponent implements OnInit {

  // userFormulario: FormGroup = new FormGroup({
  //     'user'    : new FormControl(''),
  //     'lastname': new FormControl(''),
  //     'age'     : new FormControl(0)
  // })

  userFormulario:FormGroup = this.fb.group({
    username    : ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*$') ]],
    lastname: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*$') ]],
    age     : [0, [Validators.required, this.agerestric.agecontrol, Validators.pattern(/^-?(0|[1-9]\d*)?$/) ]]
  })

  constructor(private fb:FormBuilder, private agerestric : AgevalService ){}

  ngOnInit() {
    this.userFormulario.reset({
      username: 'cristian',
      lastname: 'ramos',
    })
  }

  invalidspace( campo: string ){
    return this.userFormulario.controls[campo].errors && this.userFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.userFormulario.invalid){
      this.userFormulario.markAllAsTouched();
      return;
    }
    console.log(this.userFormulario.value);
    this.userFormulario.reset();
  }

  // guardar(userFormulariotemplate: NgForm){
  //   console.log(userFormulariotemplate.value)
  // }

  // --- validacion custom ---
  // agecontrol(control: FormGroup){
  //   const value: number = control.value;
  //   if( value < 18 || value > 65 ){
  //     return {
  //       agecontrol: true
  //     }
  //   }
  //   return null;
  // }

}
