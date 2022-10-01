const sherlockAndWatsonGymSecrets = require('../../practice/sherlock-and-watson-gym-secrets/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.splitInput(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'one',
                'two',
                'three',
            ]
        );
    });
});

describe('solve', () => {
    test('one', () => {
        expect(sherlockAndWatsonGymSecrets.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(sherlockAndWatsonGymSecrets.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(sherlockAndWatsonGymSecrets.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(sherlockAndWatsonGymSecrets.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            sherlockAndWatsonGymSecrets.solveInputs(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: one',
                'Case #2: two',
                'Case #3: three',
            ]
        );
    });
});
