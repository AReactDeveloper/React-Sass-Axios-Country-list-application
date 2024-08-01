import React from 'react'
import {useContext} from 'react'
import './CountryCard.scss'
import {ThemeContext} from '../../context/ThemeContext'


export default function CountryCard({name,region,population,capital,flag}) {
  
  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme == 'light' ? 'countryCard' : 'countryCard dark'}>
      <img src={flag} alt={name} />
        <div className="countryCard__content">
          <h2>{name}</h2>
        <p><span className='text-bold'>Population : </span>{population}</p>
        <p><span className='text-bold'>Region : </span>{region}</p>
        <p><span className='text-bold'>Capital : </span>{capital}</p>
        </div>
    </div>
  )
}
