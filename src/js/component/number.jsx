import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

export const MyNumber = props => {
	let [second, setSecond] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setSecond(second => second + 1);
		}, props.lotOfCeros);
	}, []);

	return <span className={props.className}>{second % 10}</span>;
};

MyNumber.propTypes = {
	lotOfCeros: PropTypes.number,
	className: PropTypes.string
};
