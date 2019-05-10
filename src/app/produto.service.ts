import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  //declarando uma constate para recebe o endereco da api no acesso local
  produtoUrl = 'http://5cd5a8bb9c31c600148a9b86.mockapi.io/produtos';


  constructor(private http: HttpClient) { }
  //chamada para httpclient no meu construtor 

  //modulo
  listar() {
    return this.http.get<any[]>(`${this.produtoUrl}`);
  } 
}

