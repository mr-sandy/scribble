import React from 'react';

const styles = {
    outer: {
        backgroundColor: 'rgb(214,203,173)',
        padding: '34px 34px 34px 19px',
        border: 'solid 12px rgb(57,93,90)',
        float: 'left'
    },
    border: {
        padding: '2px',
        backgroundColor: 'rgb(255,250,240)',
        float: 'left'
    }
};

const Clear = () => <div style={{ clear: 'both' }}></div>;

const OuterBoard = ({ children }) => {
    return (
        <div style={styles.outer}>
            <div style={styles.border}>
                {children}
            </div>
            <Clear />
        </div>
    );
}

export default OuterBoard;