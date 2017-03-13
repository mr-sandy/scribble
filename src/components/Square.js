import React from 'react';
import { TopTriangles, BottomTriangles, LeftTriangles, RightTriangles } from './helpers/triangles';
import { getColour, getCaption } from './helpers/bonuses';
import Tile from '../containers/Tile';

const styles = {
    base: {
        height: '50px',
        width: '46px',
        float: 'left',
        border: 'solid 2px rgb(255,250,240)',
        boxSizing: 'border-box',
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        display: 'inline-block',
        fontFamily: 'sans-serif',
        textTransform: 'uppercase',
        color: 'rgb(74,65,57)',
        fontSize: '7px',
        lineHeight: '10px',
        fontWeight: '700'
    }
};

const Square = props => {
    const {  connectDropTarget, bonus, tile } = props;
    const style = { ...styles.base, backgroundColor: getColour(bonus) };
    
    return connectDropTarget(
        <div style={style}>
            <TopTriangles bonus={bonus} />
            <BottomTriangles bonus={bonus} />
            <LeftTriangles bonus={bonus} />
            <RightTriangles bonus={bonus} />
            <span style={styles.caption}>{getCaption(bonus)}</span>
            {tile ? <Tile {...tile} /> : false}
        </div>
    );
}

export default Square;