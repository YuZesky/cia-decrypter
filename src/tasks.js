const asyncForEach = require('async-await-foreach');
const execa = require('execa');
const fs = require('node:fs');
const listr = require('listr2');
const path = require('node:path');
const trash = require('trash');

const { decryptCiaArchiveScriptPath, decryptBinPath, makeromBinPath, toolsFolder } = require('./utils/constants');

module.exports = new listr.Listr(
	[
		{
			title: 'Getting CIA archive data',
			enabled: false,
			task: (ctx) => {}
		},
		{
			title: 'Decrypting CIA archive',
			task: (ctx) => execa(decryptCiaArchiveScriptPath, [decryptBinPath, ctx.ciaArchivePath])
		},
		{
			title: 'Assembling NCCH partitions',
			task: async (ctx) => {
				let partitionsArgs = [];
				let currentPartition = 0;

				await asyncForEach(
					fs.readdirSync(toolsFolder).filter((ncchPartition) => path.extname(ncchPartition).toLocaleLowerCase() === '.ncch'),
					(ncchPartition) => {
						partitionsArgs.push('-i');
						partitionsArgs.push(`${path.join(toolsFolder, ncchPartition)}:${currentPartition}:${currentPartition}`);
						currentPartition++;
					}
				);

				await execa(makeromBinPath, [
					'-f',
					'cia',
					'-ignoresign',
					'-target',
					'p',
					'-o',
					path.join(toolsFolder, `${ctx.ciaArchiveName}-decfirst.cia`),
					...partitionsArgs
				]);
			}
		},
		{
			title: 'Converting decfirst archive to CCI',
			task: (ctx) =>
				execa(makeromBinPath, [
					'-ciatocci',
					path.join(toolsFolder, `${ctx.ciaArchiveName}-decfirst.cia`),
					'-o',
					path.join(path.dirname(ctx.ciaArchivePath), `${ctx.ciaArchiveName} (Decrypted).cci`)
				])
		},
		{
			title: 'Cleaning unused files',
			task: (ctx, task) =>
				task.newListr(
					[
						{
							title: 'Deleting NCCH partitions',
							task: () => trash(path.join(toolsFolder, '*.ncch'))
						},
						{
							title: 'Deleting decfirst archive',
							task: () => trash(path.join(toolsFolder, '*-decfirst.cia'))
						}
					],
					{
						concurrent: true
					}
				)
		}
	],
	{
		rendererOptions: {
			showTimer: true
		}
	}
);
