import { AcoesService } from './acoes.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';


@Component({
  selector: 'rxjs-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent {
  acoesInput = new FormControl();
  todaAcaoes$ = this.acoesService.getcoes().pipe(tap(() =>{console.log('Fluxo Inicial')}));

  filterInput$ = this.acoesInput.valueChanges.pipe(
    tap(()=> {console.log('Fluxo do filtro')}),
    switchMap((valorDigitado) => this.acoesService.getcoes(valorDigitado)));

  acoes$ = merge(this.todaAcaoes$, this.filterInput$);

  constructor(private acoesService: AcoesService) { }
}
