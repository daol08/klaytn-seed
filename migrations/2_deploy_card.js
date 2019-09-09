const fs = require('fs');
const DAOLCard = artifacts.require('DAOLCard');

module.exports = function(deployer) {
	deployer.deploy(DAOLCard).then(() => {
		const data = JSON.stringify({
			blockAddress: DAOLCard.blockAddress,
			contractAddress: DAOLCard.address
		});
		fs.writeFile('./contract.json', data, () =>
			console.log(`migrate completed: ${DAOLCard.address}`)
		);
	});
};
