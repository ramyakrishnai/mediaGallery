import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { LoginCredeService } from "./login-crede.service";

@Injectable()


export class AuthGaurdService implements CanActivate{
    constructor(private _router:Router,
        private loginService:LoginCredeService ) {
    }
    canActivate(): boolean | UrlTree{
      let data =  this.loginService.userLogin;
        if(data){
            return true;
        }
        this._router.navigateByUrl("/");
        return false;
    }
}