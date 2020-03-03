/**
 * @jest-environment jsdom
 */

'use strict'

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

jest
    .dontMock('fs')
    .dontMock('path')
;

describe('Test Main Application', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        jest.resetModules();
    })

    test('Display the operation multiply after run', () => {

        document.head.innerHTML = '<title>Test</title>';
        document.body.innerHTML = '<div id="wrapper"></div>';

        require('../dist/app.bundle');

        expect(document.getElementById('wrapper').innerHTML.toString()).toContain("2 x 3 = 6");
    });
});
