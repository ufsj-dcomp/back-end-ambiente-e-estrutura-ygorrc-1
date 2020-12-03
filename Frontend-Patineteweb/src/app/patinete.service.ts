import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinete } from './patinete/patinete.component';

@Injectable({
  providedIn: 'root'
})
export class PatineteService {

  constructor(private http: HttpClient) { }
  getPatinetes(): Observable<Patinete[]> {
    return this.http.get<Patinete[]>("http://localhost:3000/patinete");
    
  }
  getPatinete(patineteId: number):Observable<Patinete>{
    return this.http.get<Patinete>("http://localhost:3000/patinete" + patineteId);  
  }
  adicionar(patinete: Patinete):Observable<any>{
    return this.http.post("http://localhost:3000/patinete",patinete);
  }
  editar(patinete: Patinete):Observable<any>{
    return this.http.put("http://localhost:3000/patinete" + patinete.id,patinete);
  }
  remover(patineteId: number):Observable<any>{
    return this.http.delete("http://localhost:3000/patinete" + patineteId);
  }
}
