import { determineBonus } from './helpers';

const defaultState = () => {
    const state = [];

    for (let row = 0; row < 15; row++) {
        state.push([]);

        for (let column = 0; column < 15; column++) {
            state[row].push({
                bonus: determineBonus(row, column)
            });
        }
    }

    return state;
}

const board = (state = defaultState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default board;