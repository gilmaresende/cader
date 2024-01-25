import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SPage } from 'src/app/core/pages/spage/super-page';
import { FactoryCoreService } from 'src/app/core/services/factory-core.service';
import { Wallet } from 'src/app/model/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet-view',
  templateUrl: './wallet-view.component.html',
  styleUrls: ['./wallet-view.component.scss'],
})
export class WalletViewComponent extends SPage<Wallet, WalletService> {
  constructor(
    private service: WalletService,
    private factory: FactoryCoreService,
    private actRote: ActivatedRoute
  ) {
    super('Carteira', service, factory, actRote);
  }

  override populatedForm(ob: Wallet) {
    this.form = this.formBuilder.group({
      name: [ob.name, Validators.required],
      active: [ob.active],
      balance: [ob.balance],
      reserved: [ob.reserved],
      canBeNegative: [ob.canBeNegative],
    });
  }

  override getOb(): Wallet {
    const form = this.form?.value;
    return form;
  }
}
