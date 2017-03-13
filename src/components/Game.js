import React from 'react';
import Board from '../containers/Board';
import Players from '../containers/Players';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

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

export default DragDropContext(HTML5Backend)(Game);