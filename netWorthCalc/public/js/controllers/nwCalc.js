module.exports = (debtValue, ageValue, uniValue, yrsValue) => {
	return{
		total: () => debtValue + ageValue + uniValue + yrsValue
	};
};