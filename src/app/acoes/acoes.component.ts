import { AcoesService } from './acoes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

const ESPERA_DIGITACION = 300;

@Component({
  selector: 'rxjs-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todaAcaoes$ = this.acoesService.getcoes().pipe(tap(() =>{console.log('Fluxo Inicial')}));

  filterInput$ = this.acoesInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACION),
    tap(()=> {console.log('Fluxo do filtro')}),
    tap(console.log),
    filter((valorDigitado) => valorDigitado.length >= 3 || !valorDigitado.length),
    switchMap((valorDigitado) => this.acoesService.getcoes(valorDigitado)));

  acoes$ = merge(this.todaAcaoes$, this.filterInput$);

  constructor(private acoesService: AcoesService) { }
}
