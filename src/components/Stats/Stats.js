import React,{useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





export default function Stats() {

const [countryInfo, setCountryInfo] = useState({});
const [countries, setCountries] = useState([])


useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    .then((response)=>response.json())
    .then((data)=> {
    const countryInfo = data;

 

        setCountryInfo(countryInfo);
        console.log(countryInfo);
    
    })
        
}, [])






useEffect(() => {
    
    fetch('https://disease.sh/v3/covid-19/countries')
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
     <div>
            <div>
           {
           countries.map(country => (
                   <div key={country.id}>{country.name}</div>
               )
            )
           }
            </div>

           <div>
            { 
                Object.keys(countryInfo).map((statsType, i) => (
            <div>
                <h2 key={i}>{statsType}</h2>  
        
                <ul>
                { Object.keys(countryInfo[statsType]).map((statsDate, j) => 
                    <li key={j}>{statsDate + ' ' + countryInfo[statsType][statsDate]} </li>
                        )}
                { Object.keys(countryInfo[statsType]).map((statsDate, k) =>  
                    <li key={k}>{statsDate + ' ' + countryInfo[statsType][statsDate]}</li>
                        )}
                { Object.keys(countryInfo[statsType]).map((statsDate, k) =>  
                    <li key={k}>{statsDate + ' ' + countryInfo[statsType][statsDate]}</li>
                        )}
                </ul>
            </div>
    
    ))
    
} 

           <div>
               
           </div>

        </div>
            
    </div>


    )


}
