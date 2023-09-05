import { SEntidade } from '../../model/sentidade';
import { BaseHttpService } from '../../services/base-http.service';
import { ControlService } from '../../services/control.service';

export function getBilder(
  title: string,
  controler: ControlService,
  service: any
) {
  return {
    title: title,
    controler: controler,
    service: service,
  };
}
