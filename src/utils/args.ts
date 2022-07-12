import commandLineArgs from 'command-line-args';

export const argsDefinitions = [
	{
		name: 'file',
		alias: 'f',
		type: String
	},
	{
		name: 'output',
		alias: 'o',
		type: String
	}
];

export const args = commandLineArgs(argsDefinitions, { stopAtFirstUnknown: true });
export const unknowArgs = args._unknown;
