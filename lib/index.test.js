import { expect, test } from 'vitest'
const checker = require('../lib/index');

test('this repository\'s licenses', done => {
    checker.init({}, licenses => {
        try {
            expect(Object.keys(licenses).length).toEqual(64);
            expect(licenses['pkginfo@0.4.1'].licenses).toEqual('MIT');
            expect(licenses['pkginfo@0.4.1'].repository).toEqual('https://github.com/indexzero/node-pkginfo');
            done(); 
        } catch (error) {
            done(error);
        }
    });
});
