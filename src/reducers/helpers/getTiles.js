import { tiles, quantities } from '../../common/tiles';

const getTilesCallback = (result, tile) => {
    const number = quantities[tile.letter];
    for (let i = 0; i < number; i++){
      result.push(tile);
    }
    return result;
  };

export const getTiles = () => tiles.reduce(getTilesCallback, []);

