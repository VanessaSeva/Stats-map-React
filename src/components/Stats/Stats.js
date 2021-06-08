import React,{useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './../Stats/Stats.css'







export default function Stats() {

const [countryInfo, setCountryInfo] = useState({});
const [countries, setCountries] = useState([])

const base_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
const base_URL_Countries = 'https://disease.sh/v3/covid-19/countries'

useEffect(() => {
    fetch(base_URL)
    .then((response)=>response.json())
    .then((data)=> {
    const countryInfo = data;

 

        setCountryInfo(countryInfo);
        console.log(countryInfo);
    
    })
        
}, [])






useEffect(() => {
    
    fetch(base_URL_Countries)
    .then((response)=>response.json())
    .then((data)=> {
        const countries = data.map((country) => (
            {
                name:country.country,
                value:country.countryInfo.iso2
            }
        ))
        setCountries(countries);
        console.log(countries);
    })



}, [])




    return (
     <div className="container">
          

           <div className="wrapper">
            { 
                Object.keys(countryInfo).map((statsType, i) => (
            <div>
                <h2 key={i}>{statsType}</h2>  
        
             <div className="wrapper">
              <select>
                { Object.keys(countryInfo[statsType]).map((statsDate, j) => 
                    <option key={j}> le {statsDate + ' il y a eu ' + countryInfo[statsType][statsDate] + ' ' + ' ' + 'cas'} </option>
                        )}
                      </select>
                    </div>
                    
            </div>
    
    ))
    
} 

           <div>
               
           </div>

        </div>
            
    </div>


    )


}
