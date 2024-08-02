import React, { useEffect, useState , useContext, useRef } from 'react'
import Header from './layouts/Header/Header'
import axios from 'axios'
import './scss/_root.scss'
import CountriesList from './components/countriesList/CountriesList'
import Pagination from './components/pagination/Pagination'
import { ThemeContext  } from './context/ThemeContext'
import './scss/app.scss'
import InputsContainer from './components/InputsContainer/InputsContainer'

export default function App() {
  //theme context
  const {theme} = useContext(ThemeContext)
  //main state
  const [countries, setCountries] = useState([])
  //search input ref
  const inputRef = useRef()
  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  //countries state reset
  const [searchQuery,setSearchQuery] = useState('')
  //displayed countries
  const [displayedCountries, setDisplayedCountries] = useState([])
  const [region, setRegion] = useState('')

  //fetch data using axious
  useEffect(() => {
    const fetchCountries = async ()=>{
      try{
        const res = await axios.get("./../data.json")
        setCountries(res.data)
        setDisplayedCountries(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchCountries()
  }, [])

  useEffect(()=>{
      if(searchQuery == ''){
        setDisplayedCountries(countries)
      }
      else{
        setCurrentPage(1)
        const searchedCountries = countries.filter(prev=>
          prev.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setDisplayedCountries(searchedCountries)
      }
  },[searchQuery])

  useEffect(()=>{
    setDisplayedCountries(countries)
    if(region == 'all'){
      setDisplayedCountries(countries)
    }else{
      
      setCurrentPage(1)
      const countriesByRegion = countries.filter(country=>
        country.region.toLowerCase() == region.toLowerCase()
      )
      console.log(countriesByRegion)
      setDisplayedCountries(countriesByRegion)
    }
  },[region])

  

  const totalPages = Math.ceil(displayedCountries.length / postsPerPage);
  const lastPost = currentPage * postsPerPage
  const firstPost = lastPost - postsPerPage
  const currentList = displayedCountries.slice(firstPost,lastPost)

  //handle page change
  const handlePageChange = page =>{
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  //search functionality
  const handleInputChange  = e=> {
    setSearchQuery(e.target.value)
  }

  //handle select changge
  const handleSelectChange = e=>{
    setRegion(e.target.value)
    
  }
  
  return (
        <div className={theme == 'light' ? 'App' : 'App dark'}>
          <Header />
          <div className="container">
            <InputsContainer 
              inputRef={inputRef} 
              handleInputChange={handleInputChange} 
              handleSelectChange={handleSelectChange}
              region={region}
            />
            <CountriesList countries={currentList} />
            <Pagination pages={totalPages} handlePageChange={handlePageChange} currentPage={currentPage} />
          </div>
        </div>
  )
}
