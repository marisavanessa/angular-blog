import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
photoCover: string = "http://www.bucartaosim.com.br/images/bucomum.jpg"
cardTitle: string = "Saiu a nova versão do Angular"
Id:string="0"

constructor() {}

  ngOnInit(): void {

  }
}
