const chalk = require('chalk');
const fs = require('node:fs');
const hasExt = require('has-ext');
const packageJson = require('../package.json');
const path = require('node:path');
const readlineSync = require('readline-sync');
const tasks = require('./tasks');

const { centerString, printAsciiBanner } = require('./utils/utils');

// Main
(() => {
	console.clear();
	console.log('\n');

	printAsciiBanner();
	console.log(centerString(packageJson.description));
	console.log(centerString(`v${packageJson.version} - By ${packageJson.author.name} <${chalk.gray.underline(packageJson.author.email)}>`));

	console.log('\n');

	if (process.platform !== 'win32' || process.arch !== 'x64') {
		console.error('Sorry but this software is not compatible with your OS. Only Windows x64 is currently supported.');
		process.exit(1);
	}

	const ciaArchivePathToDecrypt = readlineSync.question('Please enter the path of the CIA archive to decrypt:\n');

	// Test if the given path exist
	if (fs.existsSync(ciaArchivePathToDecrypt)) {
		// Test if the given path is a CIA archive
		if (hasExt(ciaArchivePathToDecrypt, 'cia')) {
			const ciaArchiveName = path.basename(ciaArchivePathToDecrypt).replace('.cia', '');

			console.log('\n');

			tasks
				.run({
					ciaArchiveName: ciaArchiveName,
					ciaArchivePath: ciaArchivePathToDecrypt
				})
				.then(() => {
					console.info(`\n\n${chalk.cyan(ciaArchiveName)} was decrypted !`);
					process.exit(0);
				});
		} else {
			console.error('Sorry but the given path is not a path for a CIA archive file.');
			process.exit(1);
		}
	} else {
		console.error("Sorry but the given path doesn't exist.");
		process.exit(1);
	}
})();
