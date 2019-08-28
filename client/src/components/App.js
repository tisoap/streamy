import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import history from '../history'
import 'semantic-ui-css/semantic.min.css'

import {
  Create,
  Delete,
  Edit,
  List,
  Show
} from './Stream'

import Header from './Header'

const App = () => {
  return (
    <Container>
      <Router history={history} >
        <Header />
        <Route path='/' exact component={List} />
        <Route path='/stream/new' exact component={Create} />
        <Route path='/stream/edit/:id' exact component={Edit} />
        <Route path='/stream/delete' exact component={Delete} />
        <Route path='/stream/show' exact component={Show} />
      </Router>
    </Container>
  )
}

export default App
