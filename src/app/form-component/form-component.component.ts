import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  name:FormControl=new FormControl('',Validators.required);
  submit(login:any){
    console.log("form submitted",login);
  }
  constructor(){

  }
}
