import React, { Component, PropTypes } from 'react';

class Square extends Component {
    render() {
        const { bonus, tile } = this.props;
        const className = "square " + bonus;

        const theTile = tile
          ? <div className="tile">{tile.letter}<span className="score">{tile.score}</span></div>
          : false;

        return (
            <div className={className} onClick={e => this.handleClick(e)}>
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="left"></div>
                <div className="right"></div>
                {theTile}
            </div>
        );
    }

    handleClick(e){
      const { onSquareClick, coords } = this.props;
      onSquareClick(coords);
    }
}

Square.propTypes = {
    coords: PropTypes.shape({
      row: PropTypes.number.isRequired,
      column: PropTypes.number.isRequired
    }).isRequired,
    onSquareClick: PropTypes.func.isRequired,
    tile: PropTypes.shape({
    bonus: PropTypes.string.isRequired,
        letter: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })
};

export default Square;
