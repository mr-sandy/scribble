import React, { Component, PropTypes } from 'react';
import Square from './Square';

class Row extends Component {
    render() {
        const { columns, rowIndex, onSquareClick } = this.props
        const squares = columns.map((column, i) =>
        {
          const coords = { row: rowIndex, column: i};
          return <Square key={`${rowIndex},${i}`} {...column} coords={coords} onSquareClick={onSquareClick} />
        });

        return (
            <div className="row">
              {squares}
            </div>
        );
    }
}

Row.propTypes = {
    rowIndex: PropTypes.number.isRequired,
    onSquareClick: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
                    bonus: PropTypes.string.isRequired
            }).isRequired)
};

export default Row;
