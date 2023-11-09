function show(title: string, msg: string) {
	setMsg(msg);
	setTitle(title);
	setShow(true);
}

function drop() {
	setMsg("");
	setShow(false);
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
const ControllerMsg = {
	show,
	drop,
	setFuncaoShow,
	setFuncaoMsg,
	setFuncaoTitle,
};
export default ControllerMsg;
