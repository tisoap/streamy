import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Confirm } from 'semantic-ui-react'
import { fetchStream, deleteStream } from '../../actions'

class Delete extends Component {
  componentDidMount () {
    const { match, fetchStream } = this.props
    const streamId = match.params.id
    fetchStream(streamId)
  }

  render () {
    const { history, stream, match, deleteStream } = this.props
    const streamId = match.params.id

    const text = (stream && stream.title)
      ? `Are you sure you want to delete the stream "${stream.title}"?`
      : 'Are you sure you want to delete the stream?'

    return (
      <Confirm
        open
        header="Delete Stream"
        content={text}
        cancelButton="Cancel"
        confirmButton="Delete"
        onCancel={() => history.push('/')}
        onConfirm={() => deleteStream(streamId)}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id
  const stream = state.streams[streamId]
  return { stream }
}

const mapDispatchToProps = { fetchStream, deleteStream }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(Delete)
