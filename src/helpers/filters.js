export const filterById = (arrayOfIDs, arrayOfItems) => {
	return arrayOfItems.filter((item) => arrayOfIDs.some((id) => id === item.id));
};

export const excludeById = (arrayOfIDs, arrayOfItems) => {
	if (!arrayOfIDs.length) return arrayOfItems;
	return arrayOfItems.filter(
		(item) => !arrayOfIDs.some((id) => id === item.id)
	);
};

export const searchFilter = (arrayOfItems, value) => {
	if (value) {
		const regex = new RegExp(`${value}`, 'i');
		const regexTest = (string) => regex.test(string);
		const filteredItems = arrayOfItems.filter(
			({ id, title }) => regexTest(id) || regexTest(title)
		);
		return filteredItems;
	} else {
		return arrayOfItems;
	}
};
