import AxiosImp, { sendGet } from "../library/axios/AxiosImpl";
import Login from "../models/Login";
import Storage from "../library/storage/AsyncStorageImpl";

const filterCompraCartao = async (filter: any, setData: any) => {
	await AxiosImp.sendPostAuth("cardBuy/list", filter, setData);
};

export default filterCompraCartao;
