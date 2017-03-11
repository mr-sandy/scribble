import * as actions from '../actions';

const defaultState = {
    name: '',
    score: 0,
    tiles: [],

};

const player = (state = defaultState, action) => {
    switch (action.type) {
        case actions.TAKE_TILES:
            return action.payload.name === state.name
                ? {
                    ...state,
                    tiles: [...state.tiles, ...action.payload.tiles]
                }
                : state;

        default:
            return state;
    }
};


const players = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_PLAYER:
            return [...state, {
                ...defaultState,
                name: action.payload
            }];
        default:
            return state.map(p => player(p, action));
    }
};

export default players;