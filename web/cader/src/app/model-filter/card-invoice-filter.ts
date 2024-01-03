import { DescriptionId } from '../core/model/description-id';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface CardInvoiceFilter {
  closedDateStart?: any;
  closedDateEnd?: any;
  dueDateStart?: any;
  dueDateEnd?: any;
  card?: DescriptionId;
}

export function newCardInvoiceFilter(): CardInvoiceFilter {
  return {
    dueDateStart: getFirstDayMonth(),
    dueDateEnd: getLastDayMonth(),
  };
}
