import { createStore as reduxCreateStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { startGameMiddleware } from '../middleware';

const createStore = initialState => {

     const middleware = applyMiddleware(thunkMiddleware, startGameMiddleware);

    const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        : middleware;

    return reduxCreateStore(
        reducer,
        initialState,
        enhancers
    );
}

export default createStore;