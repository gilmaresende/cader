import AsyncStorage from "@react-native-async-storage/async-storage";

const saveDataStorage = async (key: string, data: any) => {
	try {
		await AsyncStorage.setItem(key, data);
		const value = await readDataStorage(key);
	} catch (e) {}
};

const readDataStorage = async (key: string) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		if (jsonValue) {
			return jsonValue;
		}
		return "";
	} catch (e) {
		return "";
	}
};

const Storage = {
	saveDataStorage,
	readDataStorage,
};
export default Storage;
