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
  selectedPokemon: string;
  selected = false;

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
      this.pokeList = this.service.getPokeList();
  }

  // PokemonSelected event handler
  onPokemonSelected(event: Pokemon) {
    console.log(event);
    this.selectedPokemon = event.name;
    this.selected = true;
  }

    createPokemon(event: Pokemon) {
        console.log(event);
        this.service.addNewPokemon(event);
    }
}
