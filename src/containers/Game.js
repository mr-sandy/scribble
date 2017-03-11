import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from '../components/Game';
import { initialise } from '../actions';

class InitialisedGame extends Component {
    render() {
        return <Game {...this.props} />;
    }

    componentDidMount() {
        this.props.initialise();
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps =
{
    initialise
};

export default connect(mapStateToProps, mapDispatchToProps)(InitialisedGame);
