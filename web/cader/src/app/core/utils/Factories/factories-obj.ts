import { PagesService } from '../../services/pages.service';

export function getBilder(
  title: string,
  controler: PagesService,
  service: any
) {
  return {
    title: title,
    controler: controler,
    service: service,
  };
}
