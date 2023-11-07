import AsyncStorage from "@react-native-async-storage/async-storage";

function saveLocal(key: string, data: string) {
	AsyncStorage.setItem(key, data);
}

const getLocal = async (key: string) => {
	const value = localStorage.getItem(key);
	return value;
};

const cleanLocal = async (key: string) => {
	AsyncStorage.removeItem(key);
};
const Storage = { saveLocal, getLocal, cleanLocal };
export default Storage;
