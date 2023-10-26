import { ControlService } from '../../services/control.service';

export abstract class SFilter<Filter> {
  constructor(controller: ControlService) {
    controller.setModalFilter(this);
  }

  abstract getOb(): Filter;
}
