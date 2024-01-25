import { Component } from '@angular/core';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';
import { PagesService } from 'src/app/core/services/pages.service';
import { BI } from 'src/app/model-bi/bi';
import { BIPlayService } from 'src/app/services/biplay.service';

@Component({
  selector: 'app-biplay-list',
  templateUrl: './biplay-list.component.html',
  styleUrls: ['./biplay-list.component.scss'],
})
export class BIPlayListComponent extends SPageList<BI, BIPlayService> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Nome',
      percentage: 90,
    },
  ];
  atributos: Array<string> = ['name'];

  constructor(
    private controller: PagesService,
    private service: BIPlayService
  ) {
    super('Lista BI', controller, service);
  }
}
