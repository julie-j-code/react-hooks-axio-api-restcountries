// on n'a plus besoin de faire un import il est maintenant sous-entendu
import React from 'react';
import Countries from '../components/Countries';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";


const Home = ()=>{

    return (
        <div className="absolute-center">
            <Logo/>
            <Navigation />
            <h1>Page d'accueil</h1>
            <Countries/>
        </div>
    
    );
    


}

export default Home;