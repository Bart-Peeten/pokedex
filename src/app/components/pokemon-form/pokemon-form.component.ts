import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Pokemon} from '../../models/pokemon.model';
import {PokemonService} from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  form: FormGroup;
  typeList: string[];
  @Input() type: string;
  @Output() onsubmit: EventEmitter<Pokemon> = new EventEmitter();

  constructor(private service: PokemonService) { }

  ngOnInit() {
      this.typeList = this.service.getTypeList();
      this.form = new FormGroup({
          'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
          'type': new FormControl(null, [Validators.required]),
          'url': new FormControl(null, [Validators.required, Validators.minLength(9)])
      });
  }

  submit(): void {
      const poke = new Pokemon(
          this.form.value.name,
          this.form.value.type,
          this.form.value.uri
      );
      this.form.reset();
      this.onsubmit.emit(poke);
  }

}
