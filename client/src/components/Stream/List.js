import React, { Component } from 'react'
import { List, Button, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStreams } from '../../actions'

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderStreamButtons = (stream) => {
    if (stream.userId === this.props.userId) {
      return (
        <List.Content floated="right">
          <Button
            primary
            as={Link}
            to={`/stream/edit/${stream.id}`}
          >
            Edit
          </Button>
          <Button
            negative
            as={Link}
            to={`/stream/delete/${stream.id}`}
          >
            Delete
          </Button>
        </List.Content>
      )
    }
  }

  renderCreateButton = () => {
    if (this.props.signedIn) {
      return (
        <Container textAlign="right">
          <Button primary as={Link} to="/stream/new">Create Stream</Button>
        </Container>
      )
    }
  }

  renderStreamItem = (stream) => {
    return (
      <List.Item key={stream.id}>
        { this.renderStreamButtons(stream) }
        <List.Icon verticalAlign="middle" name="camera" size="large" />
        <List.Content>
          <List.Header as={Link} to={`/stream/${stream.id}`}>
            { stream.title }
          </List.Header>
          <List.Description>
            { stream.description }
          </List.Description>
        </List.Content>
      </List.Item>
    )
  }

  render() {
    return (
      <Container>
        <h2>Streams</h2>
        <List celled>
          { this.props.streams.map(this.renderStreamItem) }
        </List>
        { this.renderCreateButton() }
      </Container>
    )
  }
}

const mapStateToProps = ({ streams, auth }) => ({
  streams: Object.values(streams),
  userId: auth.userId,
  signedIn: auth.isSignedIn,
})

const mapDispatchToProps = { fetchStreams }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(StreamList)
