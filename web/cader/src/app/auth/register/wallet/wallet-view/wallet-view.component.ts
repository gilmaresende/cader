import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EnumYesNo } from 'src/app/core/enuns/enumSimNao';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { ControlService } from 'src/app/core/services/control.service';
import { Wallet } from 'src/app/model/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss'],
})
export class WalletViewComponent extends SPage<Wallet, WalletService> {
  constructor(
    private controller: ControlService,
    private service: WalletService,
    private activatedRoute: ActivatedRoute
  ) {
    super('Carteira', controller, service, activatedRoute);
  }

  form = new FormGroup({
    active: new FormControl(EnumYesNo.YES),
    balance: new FormControl(0),
    canBeNegative: new FormControl(EnumYesNo.NO),
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    update: new FormControl(new Date()),
    reserved: new FormControl(EnumYesNo.NO),
  });

  override populatedForm(ob: Wallet) {
    const data = this.form.controls;
    data.active.setValue(ob.active);
    data.balance.setValue(ob.balance);
    data.canBeNegative.setValue(ob.canBeNegative);
    data.id.setValue(ob.id!);
    data.name.setValue(ob.name);
    data.update.setValue(ob.update);
    data.reserved.setValue(ob.reserved!);
  }

  override getOb(): Wallet {
    const form = this.form.controls;
    const ob: Wallet = {
      active: form.active.value as number,
      balance: form.balance.value as number,
      canBeNegative: form.canBeNegative.value as number,
      id: form.id.value as number,
      name: form.name.value as string,
      update: form.update.value as Date,
      reserved: form.reserved.value as number,
    };
    return ob;
  }
}
