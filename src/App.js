import React from 'react';
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import BlackSection from "./Components/BlackSection";
import CardSection from "./Components/CardSection";
import CobeBryant from "./Components/CobeBryant";

const App = () => {
    return (
        <>
          <Header/>
            <main>
            <HeroSection/>
                <BlackSection/>
                <CardSection/>
                <CobeBryant/>
            </main>
        </>
    );
};

export default App;