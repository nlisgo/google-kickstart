const moist = require('../../practice/moist/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
moist.splitInput(`2
2
Oksana Baiul
Michelle Kwan
3
Elvis Stojko
Evgeni Plushenko
Kristi Yamaguchi`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    'Oksana Baiul',
                    'Michelle Kwan',
                ],
                [
                    'Elvis Stojko',
                    'Evgeni Plushenko',
                    'Kristi Yamaguchi',
                ],
            ]
        );
    });
});

describe('solve', () => {
    test("['Oksana Baiul', 'Michelle Kwan']", () => {
        expect(moist.solve(['Oksana Baiul', 'Michelle Kwan'])).toBe(1);
    });

    test("['Elvis Stojko', 'Evgeni Plushenko', 'Kristi Yamaguchi']", () => {
        expect(moist.solve(['Elvis Stojko', 'Evgeni Plushenko', 'Kristi Yamaguchi'])).toBe(0);
    });

    test("['Elvis Stojko', 'Kristi Yamaguchi', 'Evgeni Plushenko']", () => {
        expect(moist.solve(['Elvis Stojko', 'Kristi Yamaguchi', 'Evgeni Plushenko'])).toBe(1);
    });

    test("['Kristi Yamaguchi', 'Evgeni Plushenko', 'Elvis Stojko']", () => {
        expect(moist.solve(['Kristi Yamaguchi', 'Evgeni Plushenko', 'Elvis Stojko'])).toBe(2);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            moist.solveInputs(`2
2
Oksana Baiul
Michelle Kwan
3
Elvis Stojko
Evgeni Plushenko
Kristi Yamaguchi`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 1',
                'Case #2: 0',
            ]
        );
    });
});
