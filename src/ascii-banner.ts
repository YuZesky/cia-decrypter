import { readFileSync } from 'node:fs';

import { asciiBannerPath, fileNotFound } from './utils';

export function printBanner(): void {
	var asciiBanner;

	try {
		asciiBanner = readFileSync(asciiBannerPath, { encoding: 'utf-8' });
	} catch (e) {
		return fileNotFound(asciiBannerPath);
	}

	console.log(asciiBanner + '\n');
}
