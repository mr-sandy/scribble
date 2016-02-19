import scrabble from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import logger from '../middleware/logger'

const initialData = {}
const createStoreWithMiddleware = applyMiddleware(logger)(createStore)

export function createProductStore() {
    return createStoreWithMiddleware(scrabble, initialData)
}
