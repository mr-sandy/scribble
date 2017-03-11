import { connect } from 'react-redux';
import Players from '../components/Players';
import { initialise } from '../actions';

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
