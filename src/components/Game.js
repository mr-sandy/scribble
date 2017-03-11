import React from 'react';
import Board from '../containers/Board';
import Players from '../containers/Players';

const styles = {
    board: {
        width: '70%',
        float: 'left'
    },
    players: {
        width: '30%',
        float: 'left'
    }
};

const Game = () => {
    return (
        <div>
            <div style={styles.board}>
                <Board />
            </div>
            <div style={styles.players}>
                <Players />
            </div>
        </div>
    );
}

export default Game;