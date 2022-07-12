import { join as joinPaths } from 'node:path';

// Folders
export const rootFolder = joinPaths(__dirname, '..', '..');
export const assetsFolder = joinPaths(rootFolder, 'assets');
export const targetFolder = joinPaths(rootFolder, 'target');

// Files
export const asciiBannerPath = joinPaths(assetsFolder, 'ascii-banner.txt');
export const corePath = joinPaths(targetFolder, 'release', 'cia_decrypter.dll');
