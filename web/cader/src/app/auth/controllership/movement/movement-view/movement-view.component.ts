import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { Movement } from 'src/app/model/movement';
import { MovementService } from 'src/app/services/movement.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-movement-view',
  templateUrl: './movement-view.component.html',
  styleUrls: ['./movement-view.component.scss'],
})
export class MovementViewComponent extends SPage<Movement, MovementService> {
  override getOb(): Movement {
    throw new Error('Method not implemented.');
  }
  override populatedForm(ob: Movement) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private controller: ControlService,
    private service: MovementService,
    private activatedRoute: ActivatedRoute,
    protected walletService: WalletService,
    private formBuilder: FormBuilder
  ) {
    super('Movimento', controller, service, activatedRoute);
  }

  movimentType: Array<{ id?: number; name: string }> = [
    { id: 0, name: 'Receita' },
    { id: 1, name: 'Despesa' },
  ];
}
