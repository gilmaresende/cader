import { Component } from '@angular/core';
import { SPageList } from 'src/app/core/pages/spage/super-page-list';
import { ControlService } from 'src/app/core/services/control.service';
import { BI } from 'src/app/model-bi/bi';
import { BiService } from 'src/app/services/bi.service';

@Component({
  selector: 'app-list-bi',
  templateUrl: './list-bi.component.html',
  styleUrls: ['./list-bi.component.scss'],
})
export class ListBiComponent extends SPageList<BI, BiService> {
  header: Array<{ description: string; percentage: number }> = [
    {
      description: 'Nome',
      percentage: 90,
    },
  ];
  atributos: Array<string> = ['name'];

  constructor(private controller: ControlService, private service: BiService) {
    super('Lista BI', controller, service);
  }
}
