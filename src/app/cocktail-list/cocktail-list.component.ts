import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  title : string="Cocktail liste";
  cocktails: Cocktail[]=[];
  constructor(private cocktailService : CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getCocktails().subscribe( data => this.cocktails = data);
  }

}
