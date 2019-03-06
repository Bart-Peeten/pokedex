import {Component, OnInit} from '@angular/core';
import {Pokemon} from './models/pokemon.model';
import {PokemonService} from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'pokedex';
  pokeList: Pokemon[];
  typeList: string[];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
      this.pokeList = this.service.getPokeList();
      /*this.typeList = this.service.getTypeList();*/
  }

  // PokemonSelected event handler
  onPokemonSelected($event) {
    console.log($event);
  }

    createPokemon(event: Pokemon) {
        console.log(event);
    }
}
