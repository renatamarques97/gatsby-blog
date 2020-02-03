import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (
  <div className='menu'>
      <ul className='menu-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
  </div>
)

export default Menu;
