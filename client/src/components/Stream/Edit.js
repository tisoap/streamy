import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class Edit extends Component {
  componentDidMount() {
    const { fetchStream, match } = this.props
    const streamId = match.params.id
    fetchStream(streamId)
  }

  render () {
    const { stream } = this.props
    if (!stream) return <div>Loading...</div>

    return (
      <div>{stream.title}</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id
  const stream = state.streams[streamId]
  return { stream }
}

const mapDispatchToProps = { fetchStream }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(Edit)
