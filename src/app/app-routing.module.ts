import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthHandlerComponent } from './auth-handler/auth-handler.component';

const routes: Routes = [
  { path: 'auth', component: AuthHandlerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
