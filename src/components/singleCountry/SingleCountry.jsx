import React, { useEffect ,useContext } from 'react'
import {useState} from 'react'
import {  useParams } from 'react-router-dom'
import Header from '../../layouts/Header/Header'
import { FaArrowLeft } from "react-icons/fa";
import './singleCountry.scss'
import  {Link} from 'react-router-dom'
import axios from 'axios';
import BorderButton from '../borderButton/BorderButton'

import {ThemeContext} from '../../context/ThemeContext'

export default function SingleCountry({countryList}) {

   const {theme , toggleTheme} = useContext(ThemeContext)
    const [state,setState] = useState(null)
    
    const {postId} = useParams()
    
    
    //get date from api
    useEffect(()=>{
      //getting id from url 
        axios.get('../../../data.json').then(res=>
          res.data.map(country=>{
              if(country){
                if(country.alpha3Code == postId.toUpperCase()){
                  setState(country)
                }
              }
          })
        )
      },[postId]) //include postId to ensure data changes when url changes

      // Early return if state is still null
    if (!state) {
        return <div>Loading...</div>;
    }

      //get languages list loop it and convert it into string we can output in jsx
    const languagesList = []
    Object.entries(state.languages || []).map(lang=>{
      lang.map(l=>{
        if(l.name !== undefined){
          languagesList.push(l.name)
        }
      })
    })
    const languagesString = languagesList.join(' , ')

     const currencyList = []
    Object.entries(state.currencies || []).map(currency=>{
        currency.map(c=>{
          if(c.name != undefined){
            currencyList.push(c.name)
          }
        })
    })
    const currencyString = currencyList.join(' , ')

    return (
    <>
        <Header />
        <div className={theme == 'light' ? 'App' : 'App dark'}>
        <div className={theme == 'light' ? 'singleCountry' : 'singleCountry dark'}>
          <Link className='buttonBack' to={'/'} ><FaArrowLeft /> Back </Link>
          <div className="singleCountry__grid">
            <div className="singleCountry__grid__item">
              <img src={state.flags.png} alt={state.name} />
            </div>
            <div className="singleCountry__grid__item">
              <h2>{state.name}</h2>
              <ul className="singleCountry__grid__item__list">
                <li><span className='text-bold'>Native Name</span> : {state.nativeName}</li>
                <li><span className='text-bold'>Population</span> : {state.population}</li>
                <li><span className='text-bold'>Region</span> : {state.region}</li>
                <li><span className='text-bold'>Sub Region</span> : {state.subregion}</li>
                <li><span className='text-bold'>Capital</span> : {state.capital}</li>
              </ul>
              <ul className="singleCountry__grid__item__list">
                <li><span className='text-bold'>Top Level Domain :</span> : {state.topLevelDomain}</li>
                <li><span className='text-bold'>Currencies</span> : {currencyString}</li>
                <li><span className='text-bold'>Languages</span> : {languagesString}</li>
              </ul>
              <ul className="singleCountry__grid__item__list">
                <span className='text-bold'>Border Countries : </span>
                {state.borders && state.borders.length > 0 ? (
                  <li>
                    {state.borders.map((border) => (
                      <BorderButton key={border} alpha3Code={border} />
                    ))}
                  </li>
                ) : (
                  <li>No border countries</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}