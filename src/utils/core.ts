import ffi from 'ffi-napi';
import { existsSync } from 'node:fs';

import { corePath, fileNotFoundError } from '.';

// Dynamic lib doesn't exist
if (!existsSync(corePath)) {
	fileNotFoundError(corePath);
	process.exit(1);
}

const core = ffi.Library(corePath, {
	fibonacci: ['int', ['int']],
	fileExist: ['bool', ['string']]
});

export default core;
