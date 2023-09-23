import { ControlService } from '../../services/control.service';

export abstract class SFilter {
  constructor(controller: ControlService) {
    console.log('modal');
    controller.setModalFilter(this);
  }

  abstract getOb(): any;
}
