import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isSubmitted: boolean | undefined;
  message: string="";

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
    loginForm: FormGroup;
    const isSubmitted  =  false;
  }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
    });
}
get formControls() { return this.loginForm.controls; }

login(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;

  if((this.loginForm.value.user=="admin")&& this.loginForm.value.password=="admin"){
    this.router.navigate(['/admin'])
  
  }

  this.authService.login(this.loginForm.value);
 
}
validate(){
  if((this.loginForm.value.user!=="admin")&& this.loginForm.value.password!=="admin"){
    this.message="wrong inputs"
  }
  else if(this.loginForm.value.password!=="admin"){
    this.message="wrong password"
  }
  else if(this.loginForm.value.user!=="admin"){
  this.message="wrong user name"
  }
}}

