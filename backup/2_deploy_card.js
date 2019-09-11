const fs = require('fs');
const DAOLCard = artifacts.require('DAOLCard');
const AzureUploader = require('@flui/klaytn-uploader').AzureUploader;
<<<<<<< HEAD:migrations/2_deploy_card.js

module.exports = function(deployer) {
	deployer.deploy(DAOLCard).then(() => {
		const data = JSON.stringify({
			blockAddress: DAOLCard.blockAddress,
			contractAddress: DAOLCard.address
=======
const FLUICard = artifacts.require('FLUICard');

module.exports = function(deployer) {
	deployer.deploy(FLUICard).then(() => {
		const data = JSON.stringify({
			contractAddress: FLUICard.address
>>>>>>> b826d1b203b9c79d75e261e7aba3b0fcb22c31ef:backup/2_deploy_card.js
		});

		if (!fs.existsSync('./artifacts')) {
			fs.mkdirSync('./artifacts');
			console.log(`\n    Create Artifacts`);
		}

		fs.writeFileSync('./artifacts/address.json', data);
<<<<<<< HEAD:migrations/2_deploy_card.js
		console.log(`\n    Create file of contract address to json: ${DAOLCard.address}`);

		const abi = JSON.stringify(DAOLCard._json.abi);
		fs.writeFileSync('./artifacts/abi.json', abi);
		console.log(`\n    Create file of abi file to json: ${DAOLCard.address}`);
=======
		console.log(`\n    Create file of contract address to json: ${FLUICard.address}`);

		const abi = JSON.stringify(FLUICard._json.abi);
		fs.writeFileSync('./artifacts/abi.json', abi);
		console.log(`\n    Create file of abi file to json: ${FLUICard.address}`);
>>>>>>> b826d1b203b9c79d75e261e7aba3b0fcb22c31ef:backup/2_deploy_card.js

		const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
		const accessKey = process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY;
		const uploader = new AzureUploader(accountName, accessKey);

		const containerName = process.env.AZURE_STORAGE_CONTRACT_CONTAINER_NAME;
<<<<<<< HEAD:migrations/2_deploy_card.js
		uploader.uploadArtifacts(DAOLCard._json.contractName, 'artifacts', containerName);
=======
		uploader.uploadArtifacts(FLUICard._json.contractName, 'artifacts', containerName);

>>>>>>> b826d1b203b9c79d75e261e7aba3b0fcb22c31ef:backup/2_deploy_card.js
	});
};
