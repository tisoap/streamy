import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import flv from 'flv.js'
import { fetchStream } from '../../actions'

class Show extends Component {
  constructor (props) {
    super(props)
    this.videoRef = createRef()
    this.player = null
  }

  componentDidMount () {
    const { fetchStream, match } = this.props
    const streamId = match.params.id
    fetchStream(streamId)
    this.createStreamPlayer()
  }

  componentDidUpdate () {
    this.createStreamPlayer()
  }

  componentWillUnmount () {
    this.player.destroy()
  }

  createStreamPlayer = () => {
    const { match, stream } = this.props
    const streamId = match.params.id

    const playerAlreadyCreated = !!(this.player)
    const streamNotLoaded = !(stream)
    const noVideoRef = !(this.videoRef && this.videoRef.current)

    if (playerAlreadyCreated || streamNotLoaded || noVideoRef) return

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${streamId}.flv`,
    })

    this.player.attachMediaElement(this.videoRef.current)
    this.player.load()
  }

  render () {
    const { stream } = this.props
    if (!stream) return <div>Loading...</div>

    return (
      <Container>
        <video ref={this.videoRef} style={{ width: '100%'}} controls />
        <h1>{ stream.title }</h1>
        <h5>{ stream.description }</h5>
      </Container>
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
