import axios from 'axios'
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

export default function BorderButton({alpha3Code}) {

    const [borderCountry, setBorderCountry] = useState()
    const [borderCode, setBorderCode] = useState()
    //get country base on alpha3code
    useEffect(()=>{
        axios.get('http://localhost:5173/data.json').
        then(res=>{
          res.data.map(country=>{
            if(country.alpha3Code == alpha3Code){
              setBorderCode(country.alpha3Code)
              setBorderCountry(country.name)
            }
          })
        })
    },[])
    //console.log(borderCountry.alpha2Code)
    //return name and put alpha2code in like
   return (<Link className='singleButton' to={'/country/'+ borderCode} >{borderCountry}</Link> )

}
