import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredeService } from '../login-crede.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName = '';
  LoginFailed: string;
  constructor(private router: Router,
    private loginService : LoginCredeService) { 
   
  }
  
  ngOnInit(): void {
  }
   
  onFormSubmit(formLogin){
   if(!formLogin.valid){
    this.LoginFailed = "Please enter the fields correctly";
   }else{
  let data = this.loginService.userDetails(formLogin.value);
  if(typeof(data) == 'object'){
        this.router.navigateByUrl("/gallery");
       localStorage.setItem("user",JSON.stringify(data))
      this.loginService.userLogin = true;
      this.LoginFailed = null;
      }else{
        this.LoginFailed = "User Id and Password not matching";
      }
   }
  }
}
