import ApiEntity from "@/services/api/entityapi";

export class ServiceExpenseCategory {

   // constructor() {
   //    super('expenseCategory');
   // }

   newEntity(): ExpenseCategory {
      return { name: '', active: 1 }
   }
}
