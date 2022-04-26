const getStringLenght = require('../src/index');

test('check the length of a few strings', () => {
    expect(getStringLenght('Hola')).toBe(4);
});