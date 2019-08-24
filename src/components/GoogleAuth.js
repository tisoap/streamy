import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

const clientId = '612120061601-fad4746f2th6prllejgq8db7tvuue4i7.apps.googleusercontent.com'

class GoogleAuth extends Component {
  constructor (props) {
    super(props)
    this.auth = null
    this.state = {
      isSignedIn: null,
    }
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId,
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get(),
    })
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton () {
    const { isSignedIn } = this.state

    if (isSignedIn === null) {
      return (
        <Button color='google plus'>
          <Icon name='google' />
          Checking...
        </Button>
      )
    }

    if (isSignedIn) {
      return (
        <Button color='google plus' onClick={this.onSignOutClick}>
          <Icon name='google' />
          Sign Out
        </Button>
      )
    }

    return (
      <Button color='google plus' onClick={this.onSignInClick}>
        <Icon name='google' />
        Sign In with Google
      </Button>
    )
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth
