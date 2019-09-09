const fs = require('fs');
const DAOLCard = artifacts.require('DAOLCard');
const AzureUploader = require('@flui/klaytn-uploader').AzureUploader;

module.exports = function(deployer) {
	deployer.deploy(DAOLCard).then(() => {
		const data = JSON.stringify({
			blockAddress: DAOLCard.blockAddress,
			contractAddress: DAOLCard.address
		});

		if (!fs.existsSync('./artifacts')) {
			fs.mkdirSync('./artifacts');
			console.log(`\n    Create Artifacts`);
		}

		fs.writeFileSync('./artifacts/address.json', data);
		console.log(`\n    Create file of contract address to json: ${DAOLCard.address}`);

		const abi = JSON.stringify(DAOLCard._json.abi);
		fs.writeFileSync('./artifacts/abi.json', abi);
		console.log(`\n    Create file of abi file to json: ${DAOLCard.address}`);

		const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
		const accessKey = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;
		const uploader = new AzureUploader(accountName, accessKey);

		const containerName = process.env.AZURE_STORAGE_CONTRACT_CONTAINER_NAME;
		uploader.uploadArtifacts(DAOLCard._json.contractName, 'artifacts', containerName);
	});
};
