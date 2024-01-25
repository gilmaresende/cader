import AsyncStorage from "@react-native-async-storage/async-storage";

let localData: { token: string } | null = null;

function getLocalData(): { token: string } {
	if (!localData) {
		localData = { token: "" };
	}
	return localData;
}

function setToken(token: string) {
	getLocalData().token = token;
}

function cleanToken() {
	getLocalData().token = "";
}

const Storage = { getLocalData, setToken, cleanToken };
export default Storage;
