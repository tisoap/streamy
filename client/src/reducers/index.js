import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './authentication'

export default combineReducers ({
  auth,
  form,
})
