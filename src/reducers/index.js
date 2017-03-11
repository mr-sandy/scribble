import { combineReducers } from 'redux';
import players from './players';
import game from './game';
import board from './board';

const reducer = combineReducers({
    players,
    game,
    board
});

export default reducer;