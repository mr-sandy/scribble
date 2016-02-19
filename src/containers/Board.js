import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Row from '../components/Row'


class Board extends Component {
    render() {
        const { rows } = this.props
        
        var rowCells = rows.map(row => <Row {...row} />) 

        return (
            <div className="outer-board">
                <div className="big-logo">
                    <div><span className="letter">S</span><span className="score">1</span></div>
                    <div><span className="letter">C</span><span className="score">3</span></div>
                    <div><span className="letter">R</span><span className="score">1</span></div>
                    <div><span className="letter">A</span><span className="score">1</span></div>
                    <div><span className="letter">B</span><span className="score">3</span></div>
                    <div><span className="letter">B</span><span className="score">3</span></div>
                    <div><span className="letter">L</span><span className="score">1</span></div>
                    <div><span className="letter">E</span><span className="score">1</span></div>
                </div>
                <span className="logo top">SCRABBLE</span>
                <span className="logo right">SCRABBLE</span>
                <span className="logo bottom">SCRABBLE</span>
                <div className="border">
                    <div className="board">
                        {rowCells}
                    </div>
                </div>
            </div>
        )
    }
}

Board.propTypes = {
        rows : PropTypes.arrayOf(PropTypes.shape({
            columns: PropTypes.arrayOf(PropTypes.shape({
                    bonus: PropTypes.string.isRequired
            }).isRequired
            ).isRequired
})).isRequired,

}

function select(state) {
    return state
}

export default connect(select)(Board)
