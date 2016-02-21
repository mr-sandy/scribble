import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectProductType } from '../actions';
import Board from './Board';

class Game extends Component {
    render() {
        const { rows } = this.props;

        return (
            <div className="game">
                <Board rows={rows} />
            </div>
        )
    }
}


Game.propTypes = {
}


function select(state) {
    return {
      rows : state.get('rows')
    };
}

export default connect(select)(Game);
