import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string= "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2023/07/expresso-943-eloy-chaves-central.jpg"
  contentTitle:string= "Com reformulação de linhas, expresso Terminal Eloy Chaves – Terminal Central passa a operar aos sábados"
  contentDescription:string= "olá mundo!"

  constructor() {}

  ngOnInit(): void {

  }

}
