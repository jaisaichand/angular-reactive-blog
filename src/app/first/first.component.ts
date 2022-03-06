import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }

  registerForm:FormGroup;
  emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('mr./mrs.',{validators:[Validators.required]}),
      surname:new FormControl(''),
      email: new FormControl('',{validators:[Validators.pattern(this.emailPattern),Validators.required]})
    })
  }

  langVal='tel';

  

  theText="Hi test this https://www.google.com to search";

  onSubmit(form){
    console.log(form);
    
  }


}
