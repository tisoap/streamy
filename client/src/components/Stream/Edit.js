import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { omit } from 'lodash'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './Form'

class Edit extends Component {
  componentDidMount () {
    const { fetchStream, match } = this.props
    const streamId = match.params.id
    fetchStream(streamId)
  }

  onSubmit = (formValues) => {
    const { editStream, match } = this.props
    const streamId = match.params.id
    editStream(streamId, formValues)
  }

  render () {
    const { stream } = this.props
    if (!stream) return <div>Loading...</div>

    const streamEditableValues = omit(stream, 'id', 'userId')

    return (
      <Container>
        <h2>Edit a Stream</h2>
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={streamEditableValues}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id
  const stream = state.streams[streamId]
  return { stream }
}

const mapDispatchToProps = { fetchStream, editStream }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(Edit)
