import React from 'react';
import Tile from './Tile';

const Player = ({ name, tiles }) => (
    <div>
        <h3>{name}</h3>
        <div>
            {tiles.map((t, i) => <Tile key={i} {...t} />)}
        </div>
    </div>
);

export default Player;
