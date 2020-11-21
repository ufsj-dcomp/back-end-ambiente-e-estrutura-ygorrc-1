import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

export class Usuario{
  id : number;
  nome: string;
  email: string;
  senha: string;
  saldo: number;

}
const USUARIOS: Usuario[] = [
  {id:1 , nome:'ygor' , email: 'ygormagalhaesrc@gmail.com' , senha:'12345' , saldo:0},
  {id:2 , nome:'naldo' , email: 'naldo@gmail.com', senha:'Uf21' , saldo:10.3}

];
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  displayedColumns: string[] = ['id','nome','email','senha','saldo'];
  dataSource = USUARIOS;
  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(usuarios => this.dataSource = usuarios);
  }

}
