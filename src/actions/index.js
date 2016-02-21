/*
 * action types
 */

export const SELECT_STARTING_SQUARE = 'SELECT_STARTING_SQUARE'

/*
 * action creators
 */

export function selectStartingSquare(row, column) {
    return {
        type: SELECT_STARTING_SQUARE,
        row,
        column
    };
}
