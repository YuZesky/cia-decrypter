import { red } from 'colorette';

import { type LogMessage } from './types';

function buildMessage({ title, titleColor, message }: LogMessage): string {
	return `[${titleColor(title)}] ${message}`;
}

export function printError(message: string): void {
	console.error(
		buildMessage({
			title: 'ERROR',
			titleColor: red,
			message: message
		})
	);
}
