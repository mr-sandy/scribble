import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import { SELECT_PRODUCT_TYPE } from '../actions'

function productsPath(state =''){
    return state
}

function productTypes(state = []) {
    return state
}

function selectedProduct(state = '', action) {
    switch (action.type) {
        case SELECT_PRODUCT_TYPE:
            return ''
        default:
            return state
    }
}

function selectedProductType(state = '', action) {
    switch (action.type) {
        case SELECT_PRODUCT_TYPE:
            return action.productType
        default:
            return state
    }
}

const scrabble = combineReducers({
    productsPath,
    productTypes,
    selectedProduct,
    selectedProductType
})

export default scrabble

