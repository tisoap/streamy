import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './authentication'
import streams from './stream'

export default combineReducers ({
  auth,
  form,
  streams,
})
