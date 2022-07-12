import VError from 'verror';

import { basename, dirname } from 'node:path';
import { gray } from 'colorette';

import { printError } from './logger';

/**
 * Return error message if a file was not found
 * @param {string} path Path to the file
 * @returns {void}
 */
export function fileNotFoundError(path: string): void {
	const error = new VError(`File ${gray(basename(path))} in the path ${gray(dirname(path))} was not found.`);
	printError(error.message);
}

/**
 * Return error message if a unknow arg was detected
 * @param {string[]} unknowArg Path to the file
 * @returns {void}
 */
export function unknowArgsError(unknowArg: string[]): void {
	const error = new VError(`Unknow arg${unknowArg.length > 1 ? 's' : ''}: "${unknowArg.join(', ')}".`);
	printError(error.message);
}
