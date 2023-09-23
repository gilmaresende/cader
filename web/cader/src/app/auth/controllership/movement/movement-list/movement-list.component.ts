import { Component } from '@angular/core';
import { SPageListFilter } from 'src/app/core/pages/spage/super-page-list-filter';
import { ControlService } from 'src/app/core/services/control.service';
import { newMovement } from 'src/app/model-filter/moviment-filter';
import { Movement } from 'src/app/model/movement';
import { MovementService } from 'src/app/services/movement.service';

@Component({
  selector: 'app-movement-list',
  templateUrl: './movement-list.component.html',
  styleUrls: ['./movement-list.component.scss'],
})
export class MovementListComponent extends SPageListFilter<
  Movement,
  MovementService
> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Descrição',
      percentage: 40,
    },
    {
      description: 'Carteira',
      percentage: 20,
    },
    {
      description: 'Tipo',
      percentage: 20,
    },
    {
      description: 'Data',
      percentage: 20,
    },
    {
      description: 'Valor',
      percentage: 15,
    },
  ];
  atributos: Array<string> = [
    'description',
    'wallet',
    'typeRevenueExpence',
    'movimentDate',
    'value',
  ];

  constructor(
    private controller: ControlService,
    private service: MovementService
  ) {
    super('Lista Movimentos', controller, service);
  }
}
