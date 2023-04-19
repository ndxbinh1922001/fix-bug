export const getAcountIdAndPublicKey = () => {
	const query = window.location.search.substring(1);
	const vars = query.split('&');
	let res = {};
	for (let i = 0; i < vars.length; i++) {
		const pair = vars[i].split('=');
		if (pair[0] === 'account_id' || pair[0] === 'public_key') {
			res = { ...res, [pair[0]]: pair[1] };
		}
		if (Object.keys(res).length === 2) {
			return res;
		}
	}

	return false;
};
