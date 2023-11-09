import CardBuyService from "../../app/services/CardBuyService";
import CardService from "../../app/services/CardService";
import ExpenseCategoryService from "../../app/services/ExpenseCategoryService";

const FactoryService = {
	cardBuyService: new CardBuyService(),
	cardService: new CardService(),
	expenseCategoryService: new ExpenseCategoryService(),
};

export default FactoryService;
