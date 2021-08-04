import { AcoesService } from './acoes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acoes } from './modelo/acoes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rxjs-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent implements OnInit, OnDestroy {
  acoesInput = new FormControl();
  acoes: Acoes;
  private subscription: Subscription;

  constructor(private acoesService: AcoesService) { }

  ngOnInit() {
   this.subscription = this.acoesService.getcoes()
      .subscribe((acoes) => {
        this.acoes = acoes;
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
