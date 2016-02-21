import { combineReducers } from 'redux-immutable'
import { routeReducer } from 'redux-simple-router'
import { SELECT_STARTING_SQUARE } from '../actions'

function rows(state = [], action) {
    switch (action.type) {
        case SELECT_STARTING_SQUARE:
            return action.productType
        default:
            return state
    }
}

const scrabble = combineReducers({
    rows
})

function reducer(state, action){
  switch (action.type) {
      case SELECT_STARTING_SQUARE:
        return state;
      default:
          return state;
  }
}

export default reducer;
