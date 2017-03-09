import { createStore as reduxCreateStore, applyMiddleware , compose} from 'redux';
import reducer from '../reducers';
//import thunkMiddleware from 'redux-thunk';
//import { amendmentMiddleware, previewMiddleware } from './middleware';

const createStore = initialState => {

    // const middleware = applyMiddleware(thunkMiddleware, amendmentMiddleware, previewMiddleware);

    // const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    //     ? compose(
    //         middleware,
    //         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //     )
    //     : middleware;

    return reduxCreateStore(
        reducer,
        initialState
        // enhancers
    );
}

export default createStore;