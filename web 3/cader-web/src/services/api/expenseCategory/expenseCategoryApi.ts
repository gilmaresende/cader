import ApiService from "../baseapi";

export class ApiExpenseCategory extends ApiService<Login>{
   constructor() {
      super('expenseCategory');
   }
}
