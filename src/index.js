import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Game from './containers/Game'
import {createProductStore} from './store'
import '../sass/styles.scss';

const store = createProductStore()

render(
  <Provider store={store}>
  <Game/>
</Provider>, document.getElementById('app'))
