export const ADD_PLAYER = 'ADD_PLAYER';
export const START_GAME = 'START_GAME';
export const TAKE_TILES = 'TAKE_TILES';
export const PLACE_TILE = 'PLACE_TILE';

export const addPlayer = name => ({
    type: ADD_PLAYER,
    payload: name
});

export const startGame = () => ({
    type: START_GAME,
    payload: {}
});

export const takeTiles = (name, tiles) => ({
    type: TAKE_TILES,
    payload: { name, tiles }
});

export const placeTile = (name, tile, row, column) => ({
    type: PLACE_TILE,
    payload: { name, tile, row, column }
});

export const initialise = () => dispatch => {
    dispatch(addPlayer('Matilda'));
    dispatch(addPlayer('Nelly'));
    dispatch(addPlayer('Bea'));
    dispatch(startGame());
}