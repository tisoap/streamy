import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
  return (
    <Menu pointing secondary>
      <Link to="/">
        <Menu.Item name='Streamy' />
      </Link>
      <Menu.Menu position='right'>
        <Link to="/">
          <Menu.Item name='All streams' />
        </Link>
        <Menu.Item>
          <GoogleAuth />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Header
