import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AuthGaurdService } from "./authGaurdService.service";
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [{
    path:'',
    component: HomeComponent
},{
    path:'about',
    component: AboutComponent
},{
    path:'gallery',
    component: GalleryComponent,
    canActivate: [AuthGaurdService]
}]
@NgModule({
    exports:[RouterModule],
    imports:[
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule{}

export const AppComponentsVar = [AboutComponent,HomeComponent,LoginComponent,GalleryComponent]