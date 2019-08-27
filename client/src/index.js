import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose
)

const middleware = applyMiddleware(reduxThunk)
const enhancers = composeEnhancers(middleware)
const store = createStore(reducers, enhancers)

const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

const rootElement = document.getElementById('root')

render(application, rootElement)
