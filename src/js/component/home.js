import React, { useState } from "react";

//include images into your bundle

//create your first component
export function Home() {
	const [lista, setLista] = useState([]);

	const [tarea, setTarea] = useState("");

	const handleInput = evento => {
		if (evento.charCode === 13 && evento.target.value !== "") {
			let nuevaTarea = {
				label: evento.target.value,
				done: false
			};
			let newList = [...lista, nuevaTarea];
			console.log(newList);
			setLista(newList);
			evento.target.value = "";
		}
	};

	return (
		<div className="container text-center mt-5 col-4">
			<h1>Todos</h1>
			<input
				placeholder="agregar tarea"
				onKeyPress={handleInput}
				className="border-0 shadow col-12 rounded"
			/>
			<ul className="list-group shadow">
				{lista.map((elemento, index, array) => {
					return (
						<li key={index} className="list-group-item">
							{elemento.label}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
