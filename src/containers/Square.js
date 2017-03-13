import { connect } from 'react-redux';
import Square from '../components/Square';
import { initialise } from '../actions';
import { DropTarget } from 'react-dnd';
import { placeTile } from '../actions';

// import Tile from './Tile';

const target = {
  canDrop(props) {
    return true;//canMoveKnight(props.x, props.y);
  },

  
  drop(props, monitor) {
    const {name, row, column, placeTile} = props;
    const tile = monitor.getItem();

    placeTile(name, tile, row, column);
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

const mapStateToProps = state => ({
  name: 'matilda'
});

const mapDispatchToProps =
{
  placeTile
};

export default connect(mapStateToProps, mapDispatchToProps)(DropTarget('TILE', target, collect)(Square));
