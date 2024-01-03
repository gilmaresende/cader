import { DescriptionId } from '../core/model/description-id';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface CashInflowFilter {
  dueDateStart?: any;
  dueDateEnd?: any;
  status?: DescriptionId;
  wallet?: DescriptionId;
  paymentType?: DescriptionId;
  person?: DescriptionId;
  incomeCategory?: DescriptionId;
}

export function newCashInflowFilter(): CashInflowFilter {
  return {
    dueDateStart: getFirstDayMonth(),
    dueDateEnd: getLastDayMonth(),
  };
}
