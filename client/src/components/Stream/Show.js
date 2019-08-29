import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions'

class Show extends Component {
  componentDidMount () {
    const { fetchStream, match } = this.props
    const streamId = match.params.id
    fetchStream(streamId)
  }

  render () {
    const { stream } = this.props
    if (!stream) return <div>Loading...</div>

    return (
      <div>
        <h1>{ stream.title }</h1>
        <h5>{ stream.description }</h5>
      </div>
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

export default addReduxProps(Show)
