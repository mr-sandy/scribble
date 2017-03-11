import React from 'react';
import { Provider } from 'react-redux';
import Game from './Game';

const App = ({store}) => (
    <Provider store={store}>
        <Game />
    </Provider>
);

export default App;