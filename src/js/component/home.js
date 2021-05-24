import React from "react";
import { MyNumber } from "./number.jsx";

export function Home() {
	let one = 1000;
	let ten = 10000;
	let hundred = 100000;
	let thousand = 1000000;
	return (
		<div className="text-center mt-5">
			<p>Simple Counter</p>
			<p>
				<i className="far fa-clock" />{" "}
				<MyNumber lotOfCeros={thousand} />{" "}
				<MyNumber lotOfCeros={hundred} /> <MyNumber lotOfCeros={ten} />{" "}
				<MyNumber lotOfCeros={one} />
			</p>
		</div>
	);
}
