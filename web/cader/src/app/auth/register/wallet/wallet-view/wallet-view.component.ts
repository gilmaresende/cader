import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
}
