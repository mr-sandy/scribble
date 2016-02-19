/*
 * action types
 */

export const SELECT_PRODUCT_TYPE = 'SELECT_PRODUCT_TYPE'

/*
 * action creators
 */

export function selectProductType(productType) {
    return {
        type: SELECT_PRODUCT_TYPE,
        productType
    };
}
