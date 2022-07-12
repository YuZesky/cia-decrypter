import ffi from 'ffi-napi';

import { corePath } from './utils';

const core = ffi.Library(corePath, {
	fibonacci: ['int', ['int']]
});

export default core;
