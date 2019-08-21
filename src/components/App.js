import React from 'react'

import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import { Container } from 'semantic-ui-react'

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
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={List} />
        <Route path='/stream/new' exact component={Create} />
        <Route path='/stream/edit' exact component={Edit} />
        <Route path='/stream/delete' exact component={Delete} />
        <Route path='/stream/show' exact component={Show} />
      </BrowserRouter>
    </Container>
  )
}

export default App
