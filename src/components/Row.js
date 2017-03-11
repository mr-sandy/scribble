import React from 'react';
import Square from './Square';

const style = {
    clear: 'left'
};

const Row = ({ row }) => {
    const squares = row.map((square, i) => <Square key={i} square={square} />);

    return (
        <div style={style}>
            {squares}
        </div>
    );
}

export default Row;