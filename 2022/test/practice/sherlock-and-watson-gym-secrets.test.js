const sherlockAndWatsonGymSecrets = require('../../practice/sherlock-and-watson-gym-secrets/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.splitInput(`3
1 1 5 3
1 2 4 5
1 1 2 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [1, 1, 5, 3],
                [1, 2, 4, 5],
                [1, 1, 2, 2],
            ]
        );
    });
});

describe('solve', () => {
    test('[1, 1, 5, 3]', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1, 1, 5, 3])).toBe(8);
    });

    test('two', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1, 2, 4, 5])).toBe(3);
    });

    test('three', () => {
        expect(sherlockAndWatsonGymSecrets.solve([1, 1, 2, 2])).toBe(0);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.solveInputs(`3
1 1 5 3
1 2 4 5
1 1 2 2`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 8',
                'Case #2: 3',
                'Case #3: 0',
            ]
        );
    });
});
