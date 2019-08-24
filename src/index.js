import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers)
const rootElement = document.getElementById('root')

const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(application, rootElement)
