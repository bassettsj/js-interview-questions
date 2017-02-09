// Sudoku checker
// 9x9
// 1. all rows must contain numbers 1-9. No repeats.
// 2. all columns must contain numbers 1-9. No repeats.
// 3. all 3x3 sub-grid must contain numbers 1-9. No repeats.



exports.checkSet = (set) => {
    if (set.length !== 9) return false;
    const values = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    };
    let i = 0;
    while(i <= set.length) {
        const value = set[i];
        if (values[value] === true) return false;
        if (values[value] === false) {
            values[value] = true;
        }
        i++;
    }

    return values[1] && values[2] && values[3] && values[4] &&
        values[5] && values[6] && values[7] && values[8] && values[9];
}


exports.getColumns = (grid) => {
    const result = [];
    for (let column = 0; column < 9; column++) {
        const set = [];
        for (let row = 0; row < 9; row++) {
            set.push(grid[row][column]);
        }
        result.push(set);
    }

    return result;
}

exports.check = (arr) => true;
