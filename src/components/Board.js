import React from 'react';
import Row from './Row';
import OuterBoard from './OuterBoard';

const style = {
    padding: '2px'
};

const Board = ({ board }) => {
    const rows = board.map((row, i) => <Row key={i} row={row} />);

    return (
        <OuterBoard>
        <div style={style}>
            {rows}
        </div>
        </OuterBoard>
    );
}

export default Board;