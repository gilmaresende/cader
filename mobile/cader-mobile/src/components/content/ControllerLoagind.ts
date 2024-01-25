function showLoading() {
	setLoading(true);
}

function dropLoading() {
	setLoading(false);
}

let setLoading: any;
function setFuncaoSet(setLoad: any) {
	setLoading = setLoad;
}

const ControllerLoading = {
	showLoading,
	dropLoading,
	setFuncaoSet,
};
export default ControllerLoading;
