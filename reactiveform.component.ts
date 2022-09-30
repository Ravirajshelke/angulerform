import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  genders = [
    { id : '1', value: 'Male'},
    {id : '2', value: 'Female'}
  ]
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
    
  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'userDetail' : new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, Validators.required),
      }),
      'gender': new FormControl('Male'),
      'course': new FormControl('Angular'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })
  }

  OnSubmit() {
    console.log(this.myReactiveForm.value);
  }

  OnAddSkills() {
    const control = new FormControl(null) ;
   (<FormArray>this.myReactiveForm.get('skills')).push(control);
  }
}
