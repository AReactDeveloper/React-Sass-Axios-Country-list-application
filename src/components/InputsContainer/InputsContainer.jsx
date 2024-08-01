import React, {useContext} from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import './inputContainer.scss'
import {ThemeContext} from '../../context/ThemeContext'

export default function InputsContainer({inputRef , handleInputChange , handleSelectChange , region} ) {
  
  const {theme , toggleTheme} = useContext(ThemeContext)

  return (
    <div className={theme == 'light' ? 'inputContainer' : 'inputContainer dark'}>
        <div className="inputContainer__search">
          <div className='inputContainer__search__icon'><FaSearch  /></div>
          <input onChange={handleInputChange} ref={inputRef}  type="text" name="search" id="search" placeholder='search for country....' />
        </div>
        <div className='inputContainer__regions'>
          <div className="inputContainer__regions__arrow">
            <IoIosArrowDown />
          </div>
            <select value={region} onChange={handleSelectChange}>
              <option value="all">Select by region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
        </div>
    </div>
  )
}
