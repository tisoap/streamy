import stream from '../apis/stream'
import history from '../history'

import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  SIGN_IN,
  SIGN_OUT,
} from './types'

export const createStream = formValues => async (dispatch, getState) => {
  const state = getState()
  const { userId } = state.auth
  const postData = { ...formValues, userId }
  const response = await stream.post('/streams', postData)
  dispatch({ type: CREATE_STREAM, payload: response.data })
  history.push('/')
}

export const deleteStream = (id) => async dispatch => {
  await stream.delete(`/streams/${id}`)
  dispatch({ type: DELETE_STREAM, payload: id })
  history.push('/')
}

export const editStream = (id, formValues) => async dispatch => {
  const response = await stream.patch(`/streams/${id}`, formValues)
  dispatch({ type: EDIT_STREAM, payload: response.data })
  history.push('/')
}

export const fetchStream = (id) => async dispatch => {
  const response = await stream.get(`/streams/${id}`)
  dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const fetchStreams = () => async dispatch => {
  const response = await stream.get('/streams')
  dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const signIn = (userId) => ({
  type: SIGN_IN,
  payload: userId,
})

export const signOut = () => ({ type: SIGN_OUT })
