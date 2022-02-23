import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  // loginForm = new FormGroup({
  //   email : new FormControl('',Validators.required),
  //   password : new FormControl('',Validators.required),
  // })

  // login(){
  //   localStorage.getItem(this.loginForm.value)

  //   console.log(JSON.parse,(this.loginForm.value));
  // }

  // loginForm = new FormGroup({
  //   email : new FormControl('',Validators.required),
  //   password : new FormControl('',Validators.required),
  // })
  // login(){
  //   localStorage.getItem(this.loginForm.value)
  //   console.log(JSON.parse,(this.loginForm.value));
  // }
  loginForm!: FormGroup;

  constructor() { }


  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(4)])
    })
  }

  onSubmit() : void {
       console.log(this.loginForm.value);
       localStorage.setItem('user', JSON.stringify(this.loginForm.value) )
  }

}
