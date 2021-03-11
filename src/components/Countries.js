import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {

  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);
  const [rangeValue, setRangeValue] = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    if (playOnce) {

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


    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      // sortedArray.lenght=30;
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);

    };
    sortedCountry();

    // pour qu'à chaque fois qu'une des valeurs évolue, useEffect soit relancé (évoque le cycle de vie des class components !)
  }, [data, playOnce, rangeValue]);





  return (
    <div className="countries">
      <div className="sort-container">

        {/* c'est là qu'on commence à apprécier l'utilisation des hooks */}
        <input type="range" min="1" max="250" value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)} />

        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input type="radio" value={radio} id={radio} checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="countries-list">
        {
          sortedData
            // avant de mapper, pour utiliser selectedRadio, classiquement, on filtre
            .filter((country) => country.region.includes(selectedRadio))
            .map((country) =>
              // on crée un props en envoyant les données de country à la card
              // sans oublier de passer une clée unique à chaque élément que l'on map
              <Card country={country} key={country.name} />
            )}
      </ul>

    </div>
  );
};

export default Countries;