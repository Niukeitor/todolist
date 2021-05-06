import React from "react";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="container text-center mt-5 col-4">
			<h1>Todos</h1>

			<ul className="list-group">
				<li className="list-group-item">
					<form onSubmit={}>
						<input type="text"></input>
					</form>
				</li>
				<li className="list-group-item"></li>
				<li className="list-group-item"></li>
				<li className="list-group-item"></li>
				<li className="list-group-item"></li>
			</ul>
		</div>
	);
}
