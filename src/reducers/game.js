import { combineReducers } from 'redux';
import * as actions from '../actions';
import { getTiles } from './helpers';
import { withoutTiles } from '../common/tiles';

const currentPlayer = (state = '', action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const tiles = (state = getTiles(), action) => {
    switch (action.type) {
        case actions.TAKE_TILES:
            return withoutTiles(state, action.payload.tiles);

        default:
            return state;
    }
};


const game = combineReducers({
    currentPlayer,
    tiles
});

export default game;