import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import { signIn, signOut } from '../actions'

const clientId = '612120061601-fad4746f2th6prllejgq8db7tvuue4i7.apps.googleusercontent.com'

class GoogleAuth extends Component {
  constructor (props) {
    super(props)
    this.auth = null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId,
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        const isSignedIn = this.auth.isSignedIn.get()
        this.onAuthChange(isSignedIn)
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    const { signIn, signOut } = this.props

    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId()
      return signIn(userId)
    }

    return signOut()
  }

  onSignInClick = () => {
    this.auth.signIn()
  }

  onSignOutClick = () => {
    this.auth.signOut()
  }

  renderAuthButton () {
    const { isSignedIn } = this.props

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
        <Button
          color='google plus'
          onClick={this.onSignOutClick}
        >
          <Icon name='google' />
          Sign Out
        </Button>
      )
    }

    return (
      <Button
        color='google plus'
        onClick={this.onSignInClick}
      >
        <Icon name='google' />
        Sign In with Google
      </Button>
    )
  }

  render() {
    return (
      <div>
        { this.renderAuthButton() }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ isSignedIn: state.auth.isSignedIn })
const mapDispatchToProps = { signIn, signOut }
const addReduxProps = connect(mapStateToProps, mapDispatchToProps)

export default addReduxProps(GoogleAuth)
