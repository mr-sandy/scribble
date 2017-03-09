import scrabble from '../reducers';
import { createStore, applyMiddleware } from 'redux';
import logger from '../middleware/logger';
import initialData from './initialData';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export function createGameStore() {
  return createStoreWithMiddleware(scrabble, initialData);
}
