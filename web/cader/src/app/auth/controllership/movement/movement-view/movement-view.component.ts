import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private controller: ControlService,
    private service: MovementService,
    private activatedRoute: ActivatedRoute,
    public serviceWallet: WalletService
  ) {
    super('Movimento', controller, service, activatedRoute);
  }

  typeList: Array<{ id: number; name: string }> = [
    { id: 1, name: 'Despesa' },
    { id: 2, name: 'Receita' },
  ];

  origenList: Array<{ id: number; name: string }> = [
    { id: 0, name: 'Todos' },
    { id: 1, name: 'Despesa' },
    { id: 2, name: 'Transfêrencia' },
    { id: 3, name: 'Receita' },
    { id: 4, name: 'Manual' },
  ];

  form = new FormGroup({
    id: new FormControl(0),
    update: new FormControl(new Date()),
    description: new FormControl('', Validators.required),
    movementDate: new FormControl(new Date()),
    origin: new FormControl(4),
    typeRevenueExpence: new FormControl(1),
    value: new FormControl(0),
    idWallet: new FormControl(0),
  });

  override populatedForm(ob: Movement) {
    console.log(ob);
    const data = this.form.controls;
    data.id.setValue(ob.id!);
    data.update.setValue(ob.update);
    data.description.setValue(ob.description);
    data.movementDate.setValue(ob.movementDate);

    data.origin.setValue(ob.origin);
    data.typeRevenueExpence.setValue(ob.typeRevenueExpence);
    data.value.setValue(ob.value);
    data.idWallet.setValue(ob.idWallet);
  }

  override getOb(): Movement {
    const form = this.form.controls;
    const ob: Movement = {
      id: form.id.value as number,
      update: form.update.value as Date,
      description: form.description.value as string,
      movementDate: form.movementDate.value as Date,
      origin: form.origin.value as number,
      typeRevenueExpence: form.typeRevenueExpence.value as number,
      value: form.value.value as number,
      idWallet: form.idWallet.value as number,
    };
    return ob;
  }
}
