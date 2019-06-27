import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { CharactersComponent } from './characters/characters.component';
import { LoginComponent } from './login/login.component';
 
 
 const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'logout',
    component: LogoutComponent,
    
  },
  {
    path : 'characters',
    component : CharactersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
