import { DescriptionId } from './description-id';

export interface ResponseServe {
  rotaOb?: string;
  data: any;
  datas: Array<any>;
  message: string;
  update: Date;
  itemsCombo: Array<DescriptionId>;
  id?: number;
}
