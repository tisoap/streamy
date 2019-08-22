import React, { Component } from 'react'

const clientId = '612120061601-fad4746f2th6prllejgq8db7tvuue4i7.apps.googleusercontent.com'

class GoogleAuth  extends Component {
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
      })
    })
  }

  renderAuthButton () {
    const { isSignedIn } = this.state

    if (isSignedIn === null) {
      return <div>Checking...</div>
    }

    if (isSignedIn) {
      return <div>Signed in</div>
    }

    return <div>Not signed in</div>
  }

  render() {
    console.log(this.state.isSignedIn)

    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth
