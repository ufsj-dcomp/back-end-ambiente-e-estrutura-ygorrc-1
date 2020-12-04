import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from './globals/globals';
import { Patinete } from './patinete/patinete.component';

@Injectable({
  providedIn: 'root'
})
export class PatineteService {

  constructor(private http: HttpClient, private globals: Globals) { }
  getPatinetes(): Observable<Patinete[]> {
    return this.http.get<Patinete[]>("http://localhost:3000/patinete", this.headers());
    
  }
  getPatinete(patineteId: number):Observable<Patinete>{
    return this.http.get<Patinete>("http://localhost:3000/patinete/" + patineteId,this.headers());  
  }
  adicionar(patinete: Patinete):Observable<any>{
    return this.http.post("http://localhost:3000/patinete",patinete,this.headers());
  }
  editar(patinete: Patinete):Observable<any>{
    return this.http.put("http://localhost:3000/patinete/" + patinete.id,patinete,this.headers());
  }
  remover(patineteId: number):Observable<any>{
    return this.http.delete("http://localhost:3000/patinete/" + patineteId,this.headers());
  }
  headers(){
    console.log(this.globals.loginData.token)
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json','x-access-token': this.globals.loginData.token})
    }
  }
}
