import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rxjs-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent implements OnInit {
  noDataFound = 'Não há dados';

  constructor() {}

  ngOnInit(): void {}
}
