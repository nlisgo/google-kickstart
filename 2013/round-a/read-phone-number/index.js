/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => input.slice(1).map(i => {
    [numberRaw, numberSplit] = i.split(' ').map((i, pos) => i.split(pos % 2 ? '-' : '').map(Number));

    return numberSplit.map(i => {
        const section = [];

        for (let j = 0; j < i; j++) {
            section.push(numberRaw.shift());
        }

        return section;
    });
});

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const groupNames = {
        2: 'double',
        3: 'triple',
        4: 'quadruple',
        5: 'quintuple',
        6: 'sextuple',
        7: 'septuple',
        8: 'octuple',
        9: 'nonuple',
        10: 'decuple',
    };

    return input.map(i => {
        const groups = [];
        let group = [];
        i.forEach((j, pos) => {
            group.push(numbers[j]);

            if (i[pos + 1] !== j) {
                groups.push(group);
                group = [];
            }
        });

        return groups.map(g => (groupNames.hasOwnProperty(g.length) ? groupNames[g.length] + ' ' + g[0] : g.join(' '))).join(' ');
    }).join(' ');
};

/**
 * Accepts all lines of input and prepares all solutions.
 */
const solveInputs = inputs => {
	const cases = [];
	splitInput(inputs).forEach((data, i) => {
		cases.push(`Case #${i+1}: ${solve(data)}`);
	});
	return cases;
};

/**
 * If stdin is detected then pass all lines to solveInputs.
 * 
 * Send results to stdout.
 */
if (!Boolean(process.stdin.isTTY)) {
    const lines = [];
    require('readline').createInterface({
        input: process.stdin,
    }).on('line', line => {
        lines.push(line);
    }).on('close', () => {
        solveInputs(lines).forEach(line => {
            console.log(line);
        });
    });
}

/**
 * Export all functions that we want to test.
 */
module.exports = {
	splitInput,
	solve,
	solveInputs,
};
