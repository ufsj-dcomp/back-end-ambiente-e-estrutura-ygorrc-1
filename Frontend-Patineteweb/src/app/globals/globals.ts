import { ClassStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Usuario } from '../auth/auth.component';

@Injectable()
export class Globals {
    loginData = new LoginData();
}

class LoginData {
    token: string = null;
    usuario: Usuario = null;
}