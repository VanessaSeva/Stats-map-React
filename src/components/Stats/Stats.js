import React,{useState, useEffect} from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'





export default function Stats() {

const [countryInfo, setCountryInfo] = useState({});
const [country, setCountry] = useState('worldwide');
const [mapCountries, setMapCountries] = useState([]);
const [countries, setCountries] = useState([])


useEffect(() => {
    const getInfo = async () => {
    fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    .then((response)=>response.json())
    .then((data)=> {

        const countryInfo = data;

        setCountryInfo(countryInfo);
        console.log(countryInfo);
    
    })
        
    }
    getInfo()
}, [])


useEffect(() => {
    const getCountriesData = async() => {
    fetch('https://disease.sh/v3/covid-19/countries')
    .then((response)=>response.json())
    .then((data)=> {
        const countries = data.map((country) => (
            {
                name:country.country,
                value:country.countryInfo.iso2
            }
        ))
        setMapCountries(data);
        setCountries(countries);
        console.log(countries);
    })
}
getCountriesData()

}, [])









    return (
        <div>
           {
               countries.map(country => (
                   <div key={country.id}>{country.name}</div>
               )
                    
                )
           }
        </div>
    )
}
