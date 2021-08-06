import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

    baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  findAll():Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }
}
