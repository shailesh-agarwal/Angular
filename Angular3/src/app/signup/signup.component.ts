import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  cust = {fname: '', lname: '',phone: '',role:'User'};
  constructor() { }
  ngOnInit(): void {
  }
  onsubmit(customer:Customer){
    window.alert("Account Successfully Created Now You Can Login!");
    console.log(customer);
    console.log(customer.fname);
    console.log(customer.lname);
    console.log(customer.phone);
    console.log(customer.role);
    

  }


}
