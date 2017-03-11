import React from 'react';
import { TopTriangles, BottomTriangles, LeftTriangles, RightTriangles } from './helpers/triangles';
import { getColour, getCaption } from './helpers/bonuses';
// import Tile from './Tile';

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

const Square = ({ square }) => {

    const colour = getColour(square.bonus);
    const style = { ...styles.base, backgroundColor: colour };

    return (
        <div style={style}>
            <TopTriangles bonus={square.bonus} />
            <BottomTriangles bonus={square.bonus} />
            <LeftTriangles bonus={square.bonus} />
            <RightTriangles bonus={square.bonus} />
            <span style={styles.caption}>{getCaption(square.bonus)}</span>
            {/*<Tile letter="T" score="2" />*/}
        </div>
    );
}

export default Square;