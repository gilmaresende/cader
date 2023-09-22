import { ControlService } from '../../services/control.service';

export abstract class SFilter {
  constructor(controller: ControlService) {
    controller.setPageFilter(this);
  }

  getOb() {
    return;
  }
}
