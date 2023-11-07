import AsyncStorage from "@react-native-async-storage/async-storage";

function saveLocal(key: string, data: string) {
	AsyncStorage.setItem(key, data);
}

const getLocal = async (key: string) => {
	AsyncStorage.getItem(key)
		.then((value) => {
			console.log("Valor recuperado do AsyncStorage:", value);
		})
		.catch((error) => {
			console.error("Erro ao recuperar valor:", error);
		});
};

const cleanLocal = async (key: string) => {
	AsyncStorage.removeItem(key);
};
const Storage = { saveLocal, getLocal, cleanLocal };
export default Storage;
