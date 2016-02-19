import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectProductType } from '../actions'
import Board from './Board'

function determineBonus(row, column){
    if ( row===0 && column === 0 ||
         row===0 && column === 7 ||
         row===0 && column === 14 ||
         row===7 && column === 0 ||
         row===7 && column === 14 ||
         row===14 && column === 0 ||
         row===14 && column === 7 ||
         row===14 && column === 14
         ){
        return 'triple-word'
    }

    if ( (row===1 || row===13) && (column === 1 || column === 13) ||
         (row===2 || row===12) && (column === 2 || column === 12) ||
         (row===3 || row===11) && (column === 3 || column === 11) ||
         (row===4 || row===10) && (column === 4 || column === 10)
         ){
        return 'double-word'
    }

    if ( (row===1 || row===13) && (column === 5 || column === 9) ||
        (row===5 || row===9) && (column === 1 || column === 5 || column === 9 || column === 13) 
         ){
        return 'triple-letter'
    }

    if ( (row===0 || row===14) && (column === 3 || column === 11) ||
        (row===2 || row===12) && (column === 6 || column === 8) ||
        (row===3 || row===11) && (column === 0 || column === 7 || column === 14) ||
        (row===6 || row===8) && (column === 2 || column === 6 || column === 8 || column === 12) ||
        row===7 && (column === 3 || column === 11)
         ){
        return 'double-letter'
    }
    
        if (row===7 && column === 7){
        return 'start'
    }

    return 'none'
}

class Game extends Component {
    render() {
        const rows = []
        
        for (var i =0; i < 15; i++)
        {
            const columns = []

            for (var j =0; j < 15; j++)
            {
                columns.push ({
                    bonus: determineBonus(i, j)
                })
            }

            rows.push({ columns: columns })
        }

        rows[7].columns[4].tile = { letter: 's', score: 1 }
        rows[7].columns[5].tile = { letter: 'a', score: 1 }
        rows[7].columns[6].tile = { letter: 'n', score: 1 }
        rows[7].columns[7].tile = { letter: 'd', score: 2 }
        rows[7].columns[8].tile = { letter: 'y', score: 4 }

        return (
            <div className="game">
                <Board rows={rows} />
            </div>
        )
    }
}


Game.propTypes = {
}


function select(state) {
    return state
}

export default connect(select)(Game)