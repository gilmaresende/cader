import ServiceApi from "./ServiceApi";

const findFilter = (
	service: ServiceApi,
	ob: {},
	setList: any,
	navigator: any
) => {
	service
		.filter(ob)
		.then((response) =>
			navigator(service.getListView(), { state: { data: response.data.datas } })
		)
		.catch((error) => console.log(error));
};
export { findFilter };
