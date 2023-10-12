import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return <nav className='header'>
        <div>
            <h2>Todo App.</h2>
        </div>
        <article>
            <Link to={"/"}> Home</Link>
        </article>
    </nav>
}
