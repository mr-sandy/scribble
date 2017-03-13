import React from 'react';
import Tile from './Tile';

const style = {
    float: 'left',
    height: '50px',
    width: '46px',
    position: 'relative'
};

const TileHolder = ({ children }) => (
    <div style={style}>
        {children}
    </div>
);

export default TileHolder;
