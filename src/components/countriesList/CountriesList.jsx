import React from 'react'
import './CountriesList.scss'
import CountryCard from '../CountryCard/CountryCard'
import { Link } from 'react-router-dom'

export default function CountriesList({countries}) {
  
  return (
      <section className='countriesList'>
        {countries.map(country=>{
            return <Link key={country.alpha2Code} to={'/country/'+country.alpha3Code.toUpperCase()} state={country}>
            <CountryCard 
            flag={country.flags.png}
            name={country.name} 
            population={country.population} 
            region={country.region} 
            capital={country.capital} 
        />
            </Link>
      })}
    </section>
  )
}
