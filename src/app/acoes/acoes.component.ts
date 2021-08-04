import { AcoesService } from './acoes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from './modelo/acoes';

@Component({
  selector: 'rxjs-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();
  acoes: Acoes;

  constructor(private acoesService: AcoesService) { }

  ngOnInit() {
    this.acoesService.getcoes()
      .subscribe((acoes) => {
        this.acoes = acoes;
      })
  }
}
