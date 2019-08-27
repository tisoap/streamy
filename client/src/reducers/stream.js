import { omit, mapKeys } from 'lodash'

import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types'

export default (state = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_STREAM:
    case FETCH_STREAM:
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload }
    case FETCH_STREAMS:
      const allStreams = mapKeys(payload, 'id')
      return { ...state, ...allStreams }
    case DELETE_STREAM:
      return omit(state, payload)
    default:
      return state
  }
}
