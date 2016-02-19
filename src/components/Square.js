import React, { Component, PropTypes } from 'react'


class Square extends Component {
    render() {
        const { bonus, tile } = this.props
        const className = "square " + bonus
        
        const theTile = tile
        ? <div className="tile">{tile.letter}<span className="score">{tile.score}</span></div>
        : false;
        
        return (
            
            <div className={className}>
                <div className="top"></div>
                <div className="bottom"></div>
                <div className="left"></div>
                <div className="right"></div>
                {theTile}
            </div>
        )
    }
}


Square.propTypes = {
    bonus: PropTypes.string.isRequired,
    tile: PropTypes.shape({
        letter: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
    })
}

export default Square