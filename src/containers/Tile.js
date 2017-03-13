import { connect } from 'react-redux';
import Tile from '../components/Tile';
import { DragSource } from 'react-dnd';

const source = {
    beginDrag(props) {
        return {
            letter: props.letter,
            value: props.value
        };
    }
};

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
});

const mapStateToProps = state => ({
});

const mapDispatchToProps =
{
};

export default connect(mapStateToProps, mapDispatchToProps)(DragSource('TILE', source, collect)(Tile));
