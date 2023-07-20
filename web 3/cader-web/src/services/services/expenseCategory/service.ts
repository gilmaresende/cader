import ApiEntity from "@/services/api/entityapi";

export class ServiceExpenseCategory extends ApiEntity<ExpenseCategory>{
   constructor() {
      super('expenseCategory');
   }
}
