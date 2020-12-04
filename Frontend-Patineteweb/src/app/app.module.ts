import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatDialogModule} from "@angular/material/dialog";
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MatTableModule} from '@angular/material/table';
import { MngPatineteDialog, PatineteComponent } from './patinete/patinete.component';
import { HttpClientModule } from '@angular/common/http';

import {MatSelectModule} from '@angular/material/select';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component'
import { AuthGuard } from './auth/auth.guard';
import { Globals } from './globals/globals';
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CadastroComponent,
    PatineteComponent,
    MngPatineteDialog,
    HomeComponent,
    AuthComponent
  ],
  entryComponents:[
    MngPatineteDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [AuthGuard,Globals],
  bootstrap: [AppComponent],
})
export class AppModule { }
