import React, { useContext } from 'react'
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";

import './Header.scss'
import {ThemeContext} from '../../context/ThemeContext'


export default function Header() {

  const {theme , toggleTheme} = useContext(ThemeContext)

  return (
    <header className={theme == 'light' ? 'header' : 'header dark'}>
        <div className="container">
          <h1>Where in the world?</h1>
        <button onClick={toggleTheme} className='btn' >
            {theme == 'light' ? 
                  //You should place the text and icons within the same JSX structure and use curly braces to combine them
                  (<>Light mode <CiSun /></>) : 
                  (<>Dark mode  <FaRegMoon /></>) 
            }
        </button>
        </div>
    </header>
  )
}
