import { Injectable } from '@angular/core';
import { BIItemParametroViewComponent } from './biitem-parametro-view/biitem-parametro-view.component';
import { BIQuery } from 'src/app/model-bi/biquery';

@Injectable({
  providedIn: 'root',
})
export class BIItemParametroViewService {
  view!: BIItemParametroViewComponent;
  constructor() {}

  setView(view: BIItemParametroViewComponent) {
    this.view = view;
  }

  setItem(item: BIQuery) {
    this.view.popularForm(item);
  }

  remove(item: BIQuery) {
    // var indiceParaRemover = item.dad?.queriesChildren.indexOf(item);
    // if (indiceParaRemover !== -1) {
    //   if (indiceParaRemover !== undefined) {
    //     item.dad?.queriesChildren.splice(indiceParaRemover, 1);
    //   }
    // }
  }
}
