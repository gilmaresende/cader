import "./style.scss";
import React, { useState } from "react";

function Modal(props: { isOpen: boolean; toggleModal: any }) {
	return (
		<div className={`modal ${props.isOpen ? "open" : ""}`}>
			<div className="modal-content">
				<span className="close" onClick={props.toggleModal}>
					&times;
				</span>
				<h2>Meu Modal</h2>
				<p>Este é o conteúdo do meu modal.</p>
			</div>
		</div>
	);
}
export default Modal;
