import core from './core';

import stripColor from 'strip-color';

import { readFileSync } from 'node:fs';
import { cyan, gray, redBright } from 'colorette';

import { asciiBannerPath, fileNotFoundError } from '.';

/**
 * Print the banner in the console
 * @returns {Promise<void>}
 */
export async function printBanner(): Promise<void> {
	var asciiBanner;

	// Ascii banner file doesn't exist
	if (core.fileExist(asciiBannerPath)) {
		asciiBanner = readFileSync(asciiBannerPath, { encoding: 'utf-8' }).split('\n');
	} else {
		return fileNotFoundError(asciiBannerPath);
	}

	asciiBanner.push(`Made by YuZesky <${gray('yuri.delzesky@gmail.com')}>`, `with ${cyan('TypeScript')} and ${redBright('Rust')} \n`);

	asciiBanner.forEach((currentBannerLine: string) => {
		// Align horizontaly the current line in the console
		const padding = ' '.repeat(process.stdout.columns / 2 - stripColor(currentBannerLine).length / 2);

		console.log(padding + currentBannerLine);
	});
}
