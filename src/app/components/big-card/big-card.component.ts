import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2023/06/novos-onibus-ja-estao-em-circulacao-nas-linhas-municipais.jpg"
  cardTitle:string ="Teste Marisa"
  cardDescription:string ="Este é um teste de Angular"
  Id:string="0"

  constructor() { }

  ngOnInit(): void {

  }
}
