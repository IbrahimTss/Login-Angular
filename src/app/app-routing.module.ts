import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AuthenticGuard } from './Auth-Guard/authentic.guard';


const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'users' , component:UsersComponent,
  canActivate:[AuthenticGuard]},
  {path:'', redirectTo:'/users',pathMatch:'full'}, // If the local host page is empty run  the redirect page to given component
  {path: 'home' , component:ContentComponent},
  {path: 'contact' , component:ContactComponent},
  {path : 'about' , component :AboutComponent},
  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
