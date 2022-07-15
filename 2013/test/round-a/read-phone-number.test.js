const readPhoneNumber = require('../../round-a/read-phone-number/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            readPhoneNumber.splitInput(`3
15012233444 3-4-4
15012233444 3-3-5
12223 2-3`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [1, 5, 0],
                    [1, 2, 2, 3],
                    [3, 4, 4, 4],
                ],
                [
                    [1, 5, 0],
                    [1, 2, 2],
                    [3, 3, 4, 4, 4],
                ],
                [
                    [1, 2],
                    [2, 2, 3],
                ],
            ]
        );
    });
});

describe('solve', () => {
    test('[[1, 5, 0], [1, 2, 2, 3], [3, 4, 4, 4]]', () => {
        expect(readPhoneNumber.solve([[1, 5, 0], [1, 2, 2, 3], [3, 4, 4, 4]])).toBe('one five zero one double two three three triple four');
    });

    test('[[1, 5, 0], [1, 2, 2], [3, 3, 4, 4, 4]]', () => {
        expect(readPhoneNumber.solve([[1, 5, 0], [1, 2, 2], [3, 3, 4, 4, 4]])).toBe('one five zero one double two double three triple four');
    });

    test('[[1, 2], [2, 2, 3]]', () => {
        expect(readPhoneNumber.solve([[1, 2], [2, 2, 3]])).toBe('one two double two three');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            readPhoneNumber.solveInputs(`3
15012233444 3-4-4
15012233444 3-3-5
12223 2-3`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: one five zero one double two three three triple four',
                'Case #2: one five zero one double two double three triple four',
                'Case #3: one two double two three',
            ]
        );
    });
});
