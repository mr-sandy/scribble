import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectProductType } from '../actions'

class Game extends Component {
    render() {
        const { dispatch, productTypes, products, selectedProductType, selectedProduct } = this.props
        const selectClasses = 'secondary1-back-xxl font-size-16-xxl min-width-40-xxl font-family-effra-xxl border-t-none-xxl border-b-none-xxl border-l-none-xxl border-r-none-xxl pad-t-1-and-a-half-xxl pad-b-1-and-a-half-xxl pad-l-1-xxl pad-r-1-xxl'

        return (
            <div className="game">
            </div>
        )
    }
    
    navigateToProductPage(product) {
        const { productsPath } = this.props
        const encodedProductName = product.replace(/ /g, '-').toLowerCase()
        window.location = `${productsPath}/${encodedProductName}`
    }
}


Game.propTypes = {
    productsPath: PropTypes.string.isRequired,
    productTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
    products: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedProductType: PropTypes.string,
    selectedProduct: PropTypes.string
}

function filterProducts(allProductTypes, selectedProductType) {
    return selectedProductType
        ? allProductTypes
            .find(productType => productType.name === selectedProductType)
            .products
            .map(product => { return product.name })
        : []
}

function select(state) {

    let selectedProductType = state.selectedProduct
        ? selectedProductType = state.productTypes.find(productType => productType.products.find(product => product.name === state.selectedProduct)).name
        : selectedProductType = state.selectedProductType
         
    return {
        productsPath: state.productsPath,
        productTypes: state.productTypes.map(productType => { return  productType.name }),
        products: filterProducts(state.productTypes, selectedProductType),
        selectedProductType,
        selectedProduct: state.selectedProduct
    }
}

export default connect(select)(Game)