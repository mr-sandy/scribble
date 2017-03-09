import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import createStore  from './store';

const store = createStore({});
const rootEl = document.getElementById('root');

render(
    <App store={store} />,
    rootEl
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        render(
            <NextApp store={store} />,
            rootEl
        );
    });
}