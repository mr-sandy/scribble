import * as actions from '../actions';
import { takeTiles } from '../actions';

const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const chooseTiles = (tiles, quantity) => {
    const result = [];

    while (tiles.length > 0 && result.length < quantity){
        const index = random(0, tiles.length);
        result.push(tiles[index]);
        tiles = [...tiles.slice(0, index), ...tiles.slice(index + 1)];
    }

    return result;
};

export const startGameMiddleware = ({ getState, dispatch }) => next => action => {

    if (action.type === actions.START_GAME) {
        const state = getState();
        const { players, game } = state;

        players.forEach(player => {
            const tiles = chooseTiles( getState().game.tiles, 7);
            dispatch(takeTiles(player.name, tiles));
        });
    }

    return next(action);
}