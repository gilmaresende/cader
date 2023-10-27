import AsyncStorage from "@react-native-async-storage/async-storage";

const saveDataStorage = async (key: string, data: any) => {
	try {
		const jsonValue = JSON.stringify(data);
		await AsyncStorage.setItem(key, jsonValue);
		const value = await readDataStorage(key);
	} catch (e) {}
};

const readDataStorage = async (key: string) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {}
};
const Storage = {
	saveDataStorage,
	readDataStorage,
};
export default Storage;
