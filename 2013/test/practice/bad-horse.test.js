const badHorse = require('../../practice/bad-horse/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            badHorse.splitInput(`2
1
Dead_Bowie Fake_Thomas_Jefferson
3
Dead_Bowie Fake_Thomas_Jefferson
Fake_Thomas_Jefferson Fury_Leika
Fury_Leika Dead_Bowie`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [
                        'Dead_Bowie',
                        'Fake_Thomas_Jefferson',
                    ],
                ],
                [
                    [
                        'Dead_Bowie',
                        'Fake_Thomas_Jefferson',
                    ],
                    [
                        'Fake_Thomas_Jefferson',
                        'Fury_Leika',
                    ],
                    [
                        'Fury_Leika',
                        'Dead_Bowie',
                    ],
                ],
            ]
        );
    });
});

describe('solve', () => {
    test.only("[['Dead_Bowie', 'Fake_Thomas_Jefferson']]", () => {
        expect(badHorse.solve(['Dead_Bowie', 'Fake_Thomas_Jefferson'])).toBe('Yes');
    });

    test("[['Dead_Bowie', 'Fake_Thomas_Jefferson'], ['Fake_Thomas_Jefferson', 'Fury_Leika'], ['Fury_Leika', 'Dead_Bowie']]", () => {
        expect(badHorse.solve([['Dead_Bowie', 'Fake_Thomas_Jefferson'], ['Fake_Thomas_Jefferson', 'Fury_Leika'], ['Fury_Leika', 'Dead_Bowie']])).toBe('No');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            badHorse.solveInputs(`2
1
Dead_Bowie Fake_Thomas_Jefferson
3
Dead_Bowie Fake_Thomas_Jefferson
Fake_Thomas_Jefferson Fury_Leika
Fury_Leika Dead_Bowie`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: Yes',
                'Case #2: No',
            ]
        );
    });
});
