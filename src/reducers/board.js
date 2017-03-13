import { determineBonus } from './helpers';
import * as actions from '../actions';

const defaultState = () => {
    const state = [];

    for (let row = 0; row < 15; row++) {
        state.push([]);

        for (let column = 0; column < 15; column++) {
            state[row].push({
                row,
                column,
                bonus: determineBonus(row, column)
            });
        }
    }

    return state;
}

const square = (state, action) => {
    switch (action.type) {
        case actions.PLACE_TILE:
            return {
                ...state,
                tile: action.payload.tile
            };
        default:
            return state;
    }
}

const row = (state, action) => {
    switch (action.type) {
        case actions.PLACE_TILE:
            return state.map((s, i) => action.payload.column === i ? square(s, action) : s);
        default:
            return state;
    }
}


const board = (state = defaultState(), action) => {
    switch (action.type) {
        case actions.PLACE_TILE:
            return state.map((r, i) => action.payload.row === i ? row(r, action) : r);
        default:
            return state;
    }
};

export default board;