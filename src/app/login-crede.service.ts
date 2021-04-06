import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginCredeService {
 
  usersDB = [ 
    {userid : "abc@media.com",password:"abc123",username:"tom"}, 
    {userid : "def@media.com",password:"def123",username:"dick"}
  ]
  userLogin:boolean;
  loginShow: boolean;
  constructor(private router:Router) { 
  }

  public userDetails(data):any{
    let userPresent;
    this.usersDB.forEach((value,index)=>{
      if(value.userid == data.userId && value.password == data.userPassword){
        userPresent = value;
      }
    })
    if(userPresent){
      this.loginShow = false;
      return userPresent;
    }else{
      return false;
    }
    
  }
  public Login(){
    this.loginShow = true;
  }
  public logout(){
    this.router.navigateByUrl("/")
    this.userLogin = false;
  }
}
