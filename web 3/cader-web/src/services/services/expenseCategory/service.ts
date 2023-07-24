import ApiEntity from "@/services/api/entityapi";

export class ServiceExpenseCategory extends ApiEntity<ExpenseCategory> {

   constructor() {
      super('expenseCategory');
   }

   newEntity(): ExpenseCategory {
      return { name: '', active: 1 }
   }
}
