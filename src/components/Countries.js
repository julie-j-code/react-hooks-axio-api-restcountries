import React, { useState, useEffect }  from 'react';
import axios from "axios";

const Countries = () => {

    const [data, setData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    axios
.get(
  "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
)
.then((res) => {
    setData(res.data);
    setPlayOnce(false);
  });

    return (
        <div>
            
        </div>
    );
};

export default Countries;