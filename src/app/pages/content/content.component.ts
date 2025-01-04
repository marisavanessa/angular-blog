import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string= "https://jundiai.sp.gov.br/noticias/wp-content/uploads/sites/32/2023/07/expresso-943-eloy-chaves-central.jpg"
  contentTitle:string= "Com reformulação de linhas, expresso Terminal Eloy Chaves – Terminal Central passa a operar aos sábados"
  contentDescription:string= "olá mundo!"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )

  }

}
