import { useState } from "react";
import ControllerMsg from "./ControllerMsg";
import "./style.scss";
export default function Msg() {
	const [isShow, setShow] = useState(false);
	const [msg, setMsg] = useState("");
	const [title, setTitle] = useState("");
	ControllerMsg.setFuncaoShow(setShow);
	ControllerMsg.setFuncaoTitle(setTitle);
	ControllerMsg.setFuncaoMsg(setMsg);
	return (
		<div>
			{isShow && (
				<div>
					<div className="modal" id="modal">
						<div className="modal-content">
							<h2>{title}</h2>
							<p>{msg}</p>
							<button className="btnMsgOk" onClick={() => setShow(false)}>
								Ok
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
