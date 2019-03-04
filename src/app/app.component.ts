import { Component } from '@angular/core';
import {Pokemon} from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  pokeList: Pokemon[] = [
      new Pokemon('Blastoise', 'Water', 'assets/blastoise.png'),
      new Pokemon('Bulbasaur', 'Grass', 'assets/bulbasaur.png'),
      new Pokemon('Butterfree', 'Bug', 'assets/butterfree.png'),
      new Pokemon('Caterpie', 'Bug', 'assets/caterpie.png'),
      new Pokemon('Charizard', 'Fire', 'assets/charizard.png'),
      new Pokemon('Charmander', 'Fire', 'assets/charmander.png'),
      new Pokemon('Charmeleon', 'Fire', 'assets/charmeleon.png'),
      new Pokemon('Ivysaur', 'Grass', 'assets/ivysaur.png'),
      new Pokemon('Metapod', 'Bug', 'assets/metapod.png'),
      new Pokemon('Squirtle', 'Water', 'assets/squirtle.png'),
      new Pokemon('Venusaur', 'Grass', 'assets/venusaur.png'),
      new Pokemon('Wartortle', 'Water', 'assets/wartortle.png')
  ];
}
