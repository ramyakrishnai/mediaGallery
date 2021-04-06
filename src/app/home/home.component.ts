import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LoginCredeService } from '../login-crede.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('fade', [transition(':enter',[
      style({opacity:0}),
      animate(2000)
    ]),
  ])
  ]
  
})
export class HomeComponent implements OnInit {
  showLogin:boolean;
  constructor(private loginService: LoginCredeService) {
    
   }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.showLogin = this.loginService.loginShow
  }

  loginoff(){
   
    this.loginService.loginShow = false;
  }
}
