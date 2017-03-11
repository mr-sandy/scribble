import React from 'react';
import Row from './Row';
import OuterBoard from './OuterBoard';
import Player from './Player';

const style = {
    padding: '2px'
};

const Players = ({ players }) => {

    return (
        <div>
            {players.map((p, i) => <Player key={i} {...p} />)}
        </div>
    );
}

export default Players;