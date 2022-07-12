import { blueBright, red } from 'colorette';

import { type LogMessage } from './types';

function buildMessage({ title, titleColor, message }: LogMessage): string {
	return `[${titleColor(title)}] ${message}`;
}

/**
 * Print a error message in the console
 * @param {string} message Message to print
 * @returns {void}
 */
export function printError(message: string): void {
	console.error(
		buildMessage({
			title: 'ERROR',
			titleColor: red,
			message: message
		})
	);
}

/**
 * Print a info message in the console
 * @param {string} message Message to print
 * @returns {void}
 */
export function printInfo(message: string): void {
	console.info(
		buildMessage({
			title: 'INFO',
			titleColor: blueBright,
			message: message
		})
	);
}
