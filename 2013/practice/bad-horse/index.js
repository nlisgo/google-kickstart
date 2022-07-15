/**
 * Accepts an array of lines and organises into separate cases.
 */
const splitInput = input => {
    const cases = [];
    let c = [];
    input.forEach(i => {
        if (isNaN(i)) { 
            c.push(i.split(' '));
        } else if (c.length > 0) {
            cases.push(c);
            c = [];
        }
    });

    cases.push(c);

    return cases;
};

/**
 * Accepts a single input case and returns the result as a string.
 */
const solve = input => {
    // Store value for group for each horse (-1 means not set).
    const uniqueHorses = {};
    // Flag to set the group of the first horse.
    let first = true;
    // Count for how many horses have been placed in group 0 or 1.
    let count = 1;

    // Create object with all horses and value indicating which group (-1 means not set).
    input.forEach(i => {
        i.forEach(h => {
            if (!uniqueHorses.hasOwnProperty(h)) {
                uniqueHorses[h] = first ? 1 : -1;
                first = false;
            }
        });
    });
    // Count for unique horses.
    const uniqueHorsesCount = Object.keys(uniqueHorses).length;

    // Continue until group has been set for each horse.
    while (count < uniqueHorsesCount) {
        // Make pass to set the group for each horse.
        input.forEach(i => {
            i.forEach((h, pos) => {
                // Only set horse group if it hasn't been set already and the other horse in bad pair has been set.
                const badPos = i[pos ? 0 : 1];
                if (uniqueHorses[h] < 0 && uniqueHorses[badPos] >= 0) {
                    uniqueHorses[h] = uniqueHorses[badPos] ? 0 : 1;
                    count++;
                }
            });
        });
    }

    // If there is a single case of bad pairings in same group then return 'No'.
    for (let i = 0; i < input.length; i++) {
        if (uniqueHorses[input[i][0]] === uniqueHorses[input[i][1]]) {
            return 'No';
        }
    }

    // If no bad pairings found then return 'Yes'.
    return 'Yes';
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
