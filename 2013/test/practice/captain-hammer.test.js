const captainHammer = require('../../practice/captain-hammer/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            captainHammer.splitInput(`3
98 980
98 490
299 1234`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    98,
                    980,
                ],
                [
                    98,
                    490,
                ],
                [
                    299,
                    1234,
                ],
            ]
        );
    });
});

describe('solve', () => {
    test('[98, 980]', () => {
        expect(captainHammer.solve([98, 980])).toBe('45.0000000');
    });

    test('[98, 490]', () => {
        expect(captainHammer.solve([98, 490])).toBe('15.0000000');
    });

    test('[299, 1234]', () => {
        expect(captainHammer.solve([299, 1234])).toBe('3.8870928');
    });

    test('[299, 0]', () => {
        expect(captainHammer.solve([299, 0])).toBe('0.0000000');
    });

    test('[42, 180]', () => {
        expect(captainHammer.solve([42, 180])).toBe('45.0000000');
    });

    test('[63, 405]', () => {
        expect(captainHammer.solve([63, 405])).toBe('45.0000000');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            captainHammer.solveInputs(`3
98 980
98 490
299 1234`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 45.0000000',
                'Case #2: 15.0000000',
                'Case #3: 3.8870928',
            ]
        );
    });
});
