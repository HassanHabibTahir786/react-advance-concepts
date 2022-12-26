import { testRoute } from './testRoute';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export const routes = [
    testRoute,
];
