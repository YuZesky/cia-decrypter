const { join: joinPaths } = require('node:path');

// Folders
const rootFolder = joinPaths(__dirname, '..', '..'),
	assetsFolder = joinPaths(rootFolder, 'assets'),
	scriptsFolder = joinPaths(assetsFolder, 'scripts'),
	toolsFolder = joinPaths(assetsFolder, 'tools');

// Files
const asciiBannerFilePath = joinPaths(assetsFolder, 'ascii-banner.txt');

// Scripts
const decryptCiaArchiveScriptPath = joinPaths(scriptsFolder, 'decrypt-cia-archive.bat');

// Tools
const ctrtoolBinPath = joinPaths(toolsFolder, 'ctrtool.exe'),
	decryptBinPath = joinPaths(toolsFolder, 'decrypt.exe'),
	makeromBinPath = joinPaths(toolsFolder, 'makerom.exe');

// Exports
module.exports = {
	// Folders
	toolsFolder: toolsFolder,

	// Files
	asciiBannerFilePath: asciiBannerFilePath,

	// Scripts
	decryptCiaArchiveScriptPath: decryptCiaArchiveScriptPath,

	// Tools
	ctrtoolBinPath: ctrtoolBinPath,
	decryptBinPath: decryptBinPath,
	makeromBinPath: makeromBinPath
};
