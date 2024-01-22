import { PagesService } from '../../services/pages.service';

export abstract class SFilter<Filter> {
  constructor(controller: PagesService) {
    controller.setModalFilter(this);
  }

  abstract getOb(): Filter;
}
