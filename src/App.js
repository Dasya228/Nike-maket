import React from 'react';
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import BlackSection from "./Components/BlackSection";
import CardSection from "./Components/CardSection";
import CobeBryant from "./Components/CobeBryant";
import HallSection from "./Components/HallSection";
import InnerSection from "./Components/InnerSection";
import FooterSection from "./Components/FooterSection";

const App = () => {
    return (
        <>
          <Header/>
            <main>
            <HeroSection/>
                <BlackSection/>
                <CardSection/>
                <CobeBryant/>
                <HallSection/>
                <InnerSection/>
            </main>
            <FooterSection/>
        </>
    );
};

export default App;