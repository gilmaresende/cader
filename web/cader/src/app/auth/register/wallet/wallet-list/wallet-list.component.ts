import { Component } from '@angular/core';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';
import { ControlService } from 'src/app/core/services/control.service';
import { Wallet } from 'src/app/model/wallet';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss'],
})
export class WalletListComponent extends SPageList<Wallet, WalletService> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Nome',
      percentage: 50,
    },
    {
      description: 'Saldo',
      percentage: 40,
      
    },
  ];
  atributos: Array<string> = ['name', 'balance'];

  constructor(
    private controller: ControlService,
    private service: WalletService
  ) {
    super('Lista Carteiras', controller, service);
  }
}
