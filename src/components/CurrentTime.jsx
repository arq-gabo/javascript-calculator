import React, { useEffect, useState } from "react";
import "./CurrentTime.scss";

const CurrentTime = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="currentTimeContainer">
			<p className="currentTimeFont">
				{time.getHours()}:
				{time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}
			</p>
		</div>
	);
};

export default CurrentTime;
