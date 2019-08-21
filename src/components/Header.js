import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
      </Menu.Menu>
    </Menu>
  )
}

export default Header
