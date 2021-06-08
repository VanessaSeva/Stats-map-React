import MapLeaflet from './components/Map/MapLeaflet'
import React, {useState} from 'react'
import Main from './components/Main/Main'
import Stats from './components/Stats/Stats'



function App({countryInfo, countries}) {

  








  return (
    <div className="App">
      <MapLeaflet countrieInfo={countryInfo} country={countries}/>
      <Stats />
    </div>
  );
}

export default App;
