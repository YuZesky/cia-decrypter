import VError from 'verror';

import { basename, dirname } from 'node:path';
import { gray } from 'colorette';

import { printError } from './logger';

export function fileNotFound(path: string): void {
	const error = new VError(`File ${gray(basename(path))} in the path ${gray(dirname(path))} was not found.`);
	printError(error.message);
}

export function unknowArgsError(unknowArg: string[]): void {
	const error = new VError(`Unknow arg${unknowArg.length > 1 ? 's' : ''}: "${unknowArg.join(', ')}".`);
	printError(error.message);
}
