function show(title: string, msg: string) {
	clean();
	setMsg(msg);
	setTitle(title);
	setShow(true);
}

function drop() {
	clean();
}

let setShow: any;
function setFuncaoShow(setLoad: any) {
	setShow = setLoad;
}

let setMsg: any;
function setFuncaoMsg(setMs: any) {
	setMsg = setMs;
}

let setTitle: any;
function setFuncaoTitle(setTit: any) {
	setTitle = setTit;
}

let setError: any;
function setFuncaoError(func: any) {
	setError = func;
}

function showError(error: any) {
	clean();
	setError(error.response.data);
	setShow(true);
}

function clean() {
	setError(undefined);
	setMsg(undefined);
	setTitle(undefined);
	setShow(false);
}

const ControllerMsg = {
	show,
	drop,
	setFuncaoShow,
	setFuncaoMsg,
	setFuncaoTitle,
	setFuncaoError,
	showError,
};
export default ControllerMsg;
