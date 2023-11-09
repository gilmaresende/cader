import ControllerLoading from "../../components/content/ControllerLoagind";
import ControllerMsg from "../../components/msg/ControllerMsg";
import ServiceApi from "./ServiceApi";

const findFilter = (service: ServiceApi, ob: {}, navigator: any) => {
	ControllerLoading.showLoading();
	service
		.filter(ob)
		.then((response) => {
			ControllerLoading.dropLoading();
			navigator(service.getListView(), {
				state: { data: response.data.datas },
			});
		})
		.catch((error) => {
			const errorStr = JSON.stringify(error);
			ControllerLoading.dropLoading();
			ControllerMsg.show("Erro", errorStr);
		});
};

const toNew = (service: ServiceApi, navigator: any) => {
	navigator(service.getEntitiView());
};

const findById = (service: ServiceApi, setOb: any, id: string) => {
	ControllerLoading.showLoading();
	service
		.findById(parseInt(id))
		.then((response) => {
			setOb(response.data.data);
			ControllerLoading.dropLoading();
		})
		.catch((error) => {
			const errorStr = JSON.stringify(error);
			ControllerLoading.dropLoading();
			ControllerMsg.show("Erro", errorStr);
		});
};

const save = (service: ServiceApi, ob: {}) => {
	ControllerLoading.showLoading();
	service
		.save(ob)
		.then((response) => {
			ControllerMsg.show("Sucess", response.data.message);
			ControllerLoading.dropLoading();
		})
		.catch((error) => {
			const errorStr = JSON.stringify(error);
			ControllerLoading.dropLoading();
			ControllerMsg.show("Erro", errorStr);
		});
};

export { findById, findFilter, save, toNew };
