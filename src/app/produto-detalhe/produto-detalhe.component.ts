import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html'
})
export class ProdutoDetalheComponent implements OnInit {

  produto = [
    {
      "id": 1,
      "cod": "1010",
      "preco":"4.10",
      "detalhes":"produto novo"
    },
    {
      "id": 2,
      "cod": "1011",
      "preco":"4.14",
      "detalhes":"produto novo dois"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
