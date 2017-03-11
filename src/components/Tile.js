import React from 'react';

const styles = {
    tile: {
        // position: 'absolute',
        // zIndex: '50',
        // top: '-2px',
        // bottom: '-2px',
        // left: '-2px',
        // right: '-2px',
        position: 'relative',
        display: 'inline-block',
        height: '50px',
        width: '50px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'rgb(73,72,64)',
        fontFamily: 'Futura, Trebuchet MS, Arial, sans-serif',
        fontWeight: '500',
        fontSize: '32px',
        paddingTop: '4px',
        backgroundColor: 'rgb(255,241,191)',
        borderRadius: '5px',
        borderRight: '1px solid rgb(217,193,143)',
        borderBottom: '1px solid rgb(217,193,143)',
    },
    score: {
        fontSize: '12px',
        position: 'absolute',
        bottom: '2px',
        right: '4px',
    }
};

const Tile = ({ letter, value }) => {
    return (
        <div style={styles.tile}>{letter}
            <span style={styles.score}>{value}</span>
        </div>
    );
}

export default Tile;