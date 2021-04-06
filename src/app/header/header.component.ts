import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginCredeService } from '../login-crede.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login:boolean;
  data: any;
  showMenu: boolean;
  constructor(private cd : ChangeDetectorRef,
    private loginService: LoginCredeService,
    private router : Router,
    private active: ActivatedRoute) {
  
   }
  ngOnInit(): void {
    this.showMenu = false;
  }
  logout(){
    localStorage.clear();
    this.loginService.logout();
    this.loginService.userLogin = false;
    this.login = false;
    this.cd.detectChanges();
  }
  ngDoCheck(){
    let  user = this.loginService.userLogin;
     if(user){
    this.data =  JSON.parse(localStorage.getItem("user"));
     this.login = true;
   }else{
    this.data = null;
     this.login = false
   }
  
  }
  showMenuFun(){
    this.showMenu = !this.showMenu;
    this.loginService.loginShow = false;
  }

  LogIn(){
    this.showMenu = !this.showMenu;
    this.router.navigateByUrl("")
    this.loginService.Login()
  }
}
