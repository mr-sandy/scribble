import players from '../players';
import * as tiles from '../../common/tiles';
import * as actions from '../../actions';
import deepFreeze from 'deep-freeze';

describe('when taking tiles', () => {
    it('the tiles should be added to the player', () => {
        const state = [{
            name: 'sandy',
            tiles: [tiles.a]
        }, {
            name: 'katy',
            tiles: [tiles.b]
        }];

        deepFreeze(state);

        const action = {
            type: actions.TAKE_TILES,
            payload: {
                name: 'katy',
                tiles: [tiles.x, tiles.y, tiles.z]
            }
        };

        const result = players(state, action);

        const expected = [{
            name: 'sandy',
            tiles: [tiles.a]
        }, {
            name: 'katy',
            tiles: [tiles.b, tiles.x, tiles.y, tiles.z]
        }];

        expect(result).toEqual(expected);
    });
});
