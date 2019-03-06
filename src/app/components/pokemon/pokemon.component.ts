import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    @Input() pokemon: Pokemon;
    // Event emitter waarnaar de app.component kan luisteren
    @Output() pokemonSelected = new EventEmitter<Pokemon>();

    constructor(private service: PokemonService) { }

    ngOnInit() {
    }

    // Afhandelen van click event op pokemon.component
    onClick() {
      this.pokemonSelected.emit(this.pokemon);
    }

    getColor(type: String) {
        switch (type) {
            case 'Fire': return 'red';
            case 'Water' : return 'blue';
            case 'Bug': return 'orange';
            case 'Grass' : return 'green';
        }
    }
}
