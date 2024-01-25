import { useState } from "react";
import ControllerMsg from "./ControllerMsg";
import "./style.scss";
export default function Msg() {
	const [isShow, setShow] = useState(false);
	const [msg, setMsg] = useState<string | undefined>("");
	const [title, setTitle] = useState<string | undefined>("");
	const [error, setError] = useState<
		| {
				errors: Array<{ fildName: string; message: string }>;
				error: string;
				status: number;
		  }
		| undefined
	>();
	ControllerMsg.setFuncaoShow(setShow);
	ControllerMsg.setFuncaoTitle(setTitle);
	ControllerMsg.setFuncaoMsg(setMsg);
	ControllerMsg.setFuncaoError(setError);

	let content = <></>;

	if (error) {
		content = (
			<div>
				<h2>{error.error}</h2>
				{error.status === 403 && (
					<div>
						<p>Incorrect login or password</p>
					</div>
				)}
				{error.errors && (
					<ul>
						{error.errors.map((m, index) => (
							<div key={index}>
								<li>{m.message}</li>
							</div>
						))}
					</ul>
				)}
			</div>
		);
	}
	if (msg) {
		{
			content = (
				<div>
					<h2>{title}</h2>
					<p>{msg}</p>
				</div>
			);
		}
	}

	return (
		<div>
			{isShow && (
				<div>
					<div className="modal" id="modal">
						<div className="modal-content">
							<div className="pb2">{content}</div>
							<button className="btnMsgOk" onClick={() => ControllerMsg.drop()}>
								Ok
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
