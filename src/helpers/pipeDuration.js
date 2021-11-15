export const timeConvert = (n) => {
	const num = n;
	const hours = num / 60;
	let rhours = Math.floor(hours);
	const minutes = (hours - rhours) * 60;
	let rminutes = Math.round(minutes);
	if (rhours < 10) {
		rhours = `0${rhours}`;
	}
	if (rminutes < 10) {
		rminutes = `0${rminutes}`;
	}
	return `${rhours}:${rminutes}`;
};
