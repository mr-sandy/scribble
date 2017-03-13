import React from 'react';
import Tile from '../containers/Tile';
import TileHolder from './TileHolder';
import Clear from './Clear';

const Player = ({ name, tiles }) => (
    <div>
        <h3>{name}</h3>
        <div>
            {tiles.map((t, i) => <TileHolder key={i} ><Tile {...t} /></TileHolder>)}
            <Clear />
        </div>
        <Clear />
    </div>
);

export default Player;
