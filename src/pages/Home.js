// on n'a plus besoin de faire un import il est maintenant sous-entendu
import React from 'react';
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";


const Home = ()=>{

    return (
        <div className="absolute-center">
            <Logo/>
            <Navigation />
            <h1>Pag d'accueil</h1>
        </div>
    
    );
    


}

export default Home;