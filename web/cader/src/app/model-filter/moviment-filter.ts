import { DescriptionId } from '../core/model/description-id';
import {
  getFirstDayMonth,
  getLastDayMonth,
} from '../core/utils/Date/date-util';

export interface MovimentFilter {
  movimentDateStart?: any;
  movimentDateEnd?: any;
  wallet?: DescriptionId;
  origin?: DescriptionId;
  typeRevenueExpence?: DescriptionId;
}

export function newMovementFilter(): MovimentFilter {
  return {
    movimentDateStart: getFirstDayMonth(),
    movimentDateEnd: getLastDayMonth(),
  };
}
