export const ddhhmmss = (timeLeft) => {
	let days = Math.floor(timeLeft / 86400);
	if ((days + "").length === 1) days = "0" + days;
	let hours = Math.floor((timeLeft - days * 86400) / 3600);
	if ((hours + "").length === 1) hours = "0" + hours;
	let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
	if ((minutes + "").length === 1) minutes = "0" + minutes;
	let seconds = timeLeft - days * 86400 - hours * 3600 - minutes * 60;
	if ((seconds + "").length === 1) seconds = "0" + seconds;
	return [days, hours, minutes, seconds];
};

export const ddhhmmssColon = (timeLeft) => {
	const result = ddhhmmss(timeLeft);
	return `${result[0]} : ${result[1]} : ${result[2]} : ${result[3]} : `;
};

export const days = (timeLeft) => ddhhmmss(timeLeft)[0];
export const dd = (timeLeft) => days(timeLeft);

export const hours = (timeLeft) => ddhhmmss(timeLeft)[1];
export const hh = (timeLeft) => hours(timeLeft);

export const minutes = (timeLeft) => ddhhmmss(timeLeft)[2];
export const mm = (timeLeft) => minutes(timeLeft);

export const seconds = (timeLeft) => ddhhmmss(timeLeft)[3];
export const ss = (timeLeft) => seconds(timeLeft);
