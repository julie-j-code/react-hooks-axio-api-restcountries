import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  useEffect(() => {
if(playOnce){

  axios
    .get(
      "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
    )
    .then((res) => {
      setData(res.data)
      setPlayOnce(false);
    }
);
  }


      const sortedCountry=()=>{
        const countryObj=Object.keys(data).map((i)=>data[i]);
        const sortedArray=countryObj.sort((a,b)=>{
          return b.population - a.population;
        });
        sortedArray.lenght=30;
        setSortedData(sortedArray);

      };
      sortedCountry();

  }, [data, playOnce]);

  



  return (
    <div className="countries">
      <ul className="countries-list">

        {sortedData.map((country) =>
          // on crée un props en envoyant les données de country à la card
          // sans oublier de passer une clée unique à chaque élément que l'on map
          <Card country={country} key={country.name} />
        )}
      </ul>
    </div>
  );
};

export default Countries;