import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'rxjs-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent {
  acoesInput = new FormControl();

  constructor() {}
}
