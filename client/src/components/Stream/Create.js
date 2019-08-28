import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { createStream } from '../../actions'
import StreamForm from './Form'

class Create extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render () {
    return (
      <Container>
        <h2>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </Container>
    )
  }
}
const mapStateToProps = null
const mapDispatchToProps = { createStream }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(Create)
