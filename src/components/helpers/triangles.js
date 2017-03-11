import React from 'react';
import * as bonuses from '../../common/bonuses';
import { getColour } from './bonuses';

const styles = {
    top: {
        top: '-4px',
        left: '50%',
        position: 'absolute',
    },
    bottom: {
        bottom: '0',
        left: '50%',
        position: 'absolute',
    },
    left: {
        left: '-4px',
        top: '50%',
        position: 'absolute',
    },
    right: {
        right: '0',
        top: '50%',
        position: 'absolute',
    },
    triangle: {
        width: '0',
        height: '0',
        position: 'absolute',
        zIndex: '10',
    },
    triangleTop: (colour, xShift) => ({
        ...styles.triangle,
        transform: `translateX(${xShift}) translateY(0)`,
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
        borderBottom: `4px solid ${colour}`,
        borderTop: 'none'
    }),
    triangleBottom: (colour, xShift) => ({
        ...styles.triangle,
        transform: 'translateX(' + xShift + ') translateY(0)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
        borderTop: `4px solid ${colour}`,
        borderBottom: 'none'
    }),
    triangleLeft: (colour, yShift) => ({
        ...styles.triangle,
        transform: 'translateY(' + yShift + ') translateX(0)',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderRight: `4px solid ${colour}`,
        borderLeft: 'none'
    }),
    triangleRight: (colour, yShift) => ({
        ...styles.triangle,
        transform: 'translateY(' + yShift + ') translateX(0)',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: `4px solid ${colour}`,
        borderRight: 'none'
    })
};

const Triangles = ({bonus, outerStyle, triangleStyle}) => {
    const colour = getColour(bonus);

    switch (bonus) {
        case bonuses.START:
        case bonuses.DOUBLE_WORD:
        case bonuses.DOUBLE_LETTER:
            return (
                <div style={outerStyle}>
                    <div style={triangleStyle(colour, '-7px')} />
                    <div style={triangleStyle(colour, '1px')} />
                </div>
            )
        case bonuses.TRIPLE_WORD:
        case bonuses.TRIPLE_LETTER:
            return (
                <div style={outerStyle}>
                    <div style={triangleStyle(colour, '-11px')} />
                    <div style={triangleStyle(colour, '-3px')} />
                    <div style={triangleStyle(colour, '5px')} />
                </div>
            );
        default:
            return false;
    }
};

export const TopTriangles = ({ bonus }) => <Triangles bonus={bonus} outerStyle={styles.top} triangleStyle={styles.triangleTop} />;
export const BottomTriangles = ({ bonus }) => <Triangles bonus={bonus} outerStyle={styles.bottom} triangleStyle={styles.triangleBottom} />;
export const LeftTriangles = ({ bonus }) => <Triangles bonus={bonus} outerStyle={styles.left} triangleStyle={styles.triangleLeft} />;
export const RightTriangles = ({ bonus }) => <Triangles bonus={bonus} outerStyle={styles.right} triangleStyle={styles.triangleRight} />;