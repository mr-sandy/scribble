import React from 'react';
import Square from '../containers/Square';

const Row = ({ row }) => (
    <div>
        {row.map((square, i) => <Square key={i} {...square} />)}
    </div>
);

export default Row;