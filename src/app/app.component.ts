import { Component } from '@angular/core';
import { LoginCredeService } from './login-crede.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mediaGallery';
constructor(private loginService : LoginCredeService){}
  ngOnInit(){
    let user = localStorage.getItem("user");
    if(user){
     this.loginService.userLogin = true
   }else{
     this.loginService.userLogin = false;
   }
  }
}
