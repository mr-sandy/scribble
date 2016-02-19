import React, { Component, PropTypes } from 'react'
import Square from './Square'

class Row extends Component {
    render() {
        const { columns } = this.props 
        const squares = columns.map(column => <Square {...column} />)
        return (
            <div className="row">
              { squares }
            </div>
        )
    }
}


Row.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
                    bonus: PropTypes.string.isRequired
            }).isRequired)
}


export default Row