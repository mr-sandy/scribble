import { connect } from 'react-redux';
import Board from '../components/Board';
import { initialise } from '../actions';

const mapStateToProps = state => ({
    board: state.board
});

const mapDispatchToProps =
{
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
