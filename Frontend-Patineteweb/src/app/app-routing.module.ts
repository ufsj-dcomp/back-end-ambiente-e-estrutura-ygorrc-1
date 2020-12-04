import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { PatineteComponent } from './patinete/patinete.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', component: AuthComponent},
  { path: 'home',component:HomeComponent,canActivate:[AuthGuard],
    children:[
      { path: 'usuario' , component: UsuarioComponent},
      { path: 'patinete' , component: PatineteComponent}
    ]},
  { path: 'cadastro' , component: CadastroComponent}  ,
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
