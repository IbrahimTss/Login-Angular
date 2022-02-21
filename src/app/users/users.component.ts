import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit() : void {
       console.log(this.loginForm.value);
  }

}
