export const getListServices = async () => {
	const response = await fetch(process.env.REACT_APP_SERVICES_URL);

	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return await response.json();
};

export const getDetailService = async () => {
	const response = await fetch(`${process.env.REACT_APP_SERVICES_URL}${window.localStorage.getItem('id')}`);

	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return await response.json();
};
