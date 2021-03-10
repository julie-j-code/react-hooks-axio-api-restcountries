import React from 'react';

const Card = (props) => {
    // pour se créer en option un raccourcis qui nous évite le props.country.xxx
    // on va destructurer ! putain de merde...
    const { country } = props;

    return (
        <div>
            <li className="card">
                <img src={country.flag} alt="flag" />
                <div className="data-container">
                    <ul>
                        <li>{country.name}</li>
                        <li>{country.capital}</li>
                        <li>Pop. {country.population}</li>
                    </ul>
                </div>
            </li>
        </div>
    );
};

export default Card;