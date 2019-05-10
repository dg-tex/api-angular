import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalheComponent implements OnInit {

  produto: Array<any>;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

    this.listar();
  }

  listar() {
    this.produtoService.listar().subscribe(dados => this.produto = dados);
  }
 
}
