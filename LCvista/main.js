

// STEP 1: Convert rows into columns
// this function converts the grids from rows into columns. comment in the console.logs to see the "before" and "after"
function update_grid_contents_to_columns(grid_by_rows) {
    // console.log("BEFORE:", grid_by_rows)
    var grid_by_cols = []
    // console.log("AFTER:")
    for (var row = 0; row < grid_by_rows[0].length; row++) {
        var column = []
        for (var col = 0; col < grid_by_rows.length; col++) {
            column.push(grid_by_rows[col][row])
        }
        // console.log(`column ${row}:`, column)
        grid_by_cols.push(column)
    }
    // Iterate through the columns to process the "falling rock" logic
    for (var col = 0; col < grid_by_cols.length; col++) {
        split_and_process_columns(grid_by_cols[col])
    }
    // console.log("AFTER process_subsection:", grid_by_cols)
    // this finally returns our manipulated grid to Step 4
    return grid_by_cols
}

// STEP 2: Falling Rock logic - full column! 
function split_and_process_columns(column) {
    // returns an array of the indices of all barriers:
    const barrier_indices = column.map((obj, index) => obj == 'T' ? index : -1).filter(index => index >= 0)
    // console.log(column, barrier_indices)
    var subsection_idx = 0
    // for each barrier, take the section preceding it and process it (Step 3!)
    barrier_indices.forEach(barrier_idx => {
        if (subsection_idx != barrier_idx) {
            process_subsection(column, subsection_idx, barrier_idx)
        }
        // increment to the following section
        subsection_idx = barrier_idx + 1
    })
    // this is how we process whatever is beyond the last barrier!
    process_subsection(column, subsection_idx, column.length)
}

// STEP 3: Falling Rock logic - sub sections!
// i.e. collecting the rocks in the sub sections between barriers: 
function process_subsection(column, starting_idx, ending_idx) {
    const subsection = column.slice(starting_idx, ending_idx)
    // add up all the rocks in the subsections:
    var total_rocks = 2 * (subsection.filter(obj => obj == ':').length) + subsection.filter(obj => obj == '.').length
    // console.log(total_rocks)
    // starting at the end of the section and working our way down
    for (var idx = ending_idx - 1; idx >= starting_idx; idx--) {
        // if the total rocks is greater than or equal to two, we put two at the end index, and so forth
        if (total_rocks >= 2) {
            column[idx] = ':'
            total_rocks -= 2
        } else if (total_rocks == 1) {
            column[idx] = '.'
            total_rocks -= 1
        } else {
            column[idx] = ' '
        }
    }
}

// STEP 4: Convert columns back into rows for printing
// The reverse of step 1, convert our columns back into rows for printing purposes! 
function print_grid_by_cols(grid) {
    // console.log(grid)
    for (var row = 0; row < grid[0].length; row++) {
        var row_to_print = []
        for (var col = 0; col < grid.length; col ++){
            row_to_print.push(grid[col][row])
        }
        console.log(row_to_print.join(""))
    }
}

function main(grid_by_rows) {
    // STEP 1 ->
    var grid_by_cols = update_grid_contents_to_columns(grid_by_rows)
    // STEP 4 ->
    print_grid_by_cols(grid_by_cols) 
}


// var grid_by_rows = [
//     ":",
//     ".",
//     "T",
//     " ",
// ]
// var grid_by_rows = [
//     "::...",
//     "TT   ",
//     ".  . ",
//     "     ",
//     "T T ."
// ]

var grid_by_rows = [
        '....:',
        ' T T.',
        '.:..:',
        '... .',
]

main(grid_by_rows)
