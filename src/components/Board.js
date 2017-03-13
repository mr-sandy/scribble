import React from 'react';
import Row from './Row';
import OuterBoard from './OuterBoard';

const style = {
    padding: '2px'
};

const Board = ({ board }) => (
    <OuterBoard>
        <div style={style}>
            {board.map((row, i) => <Row key={i} row={row} />)}
        </div>
    </OuterBoard>
);

export default Board;