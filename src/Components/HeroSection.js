import React from 'react';
import Group from '../image/Group 1.png'
import Picture from '../image/Pict.png'

const HeroSection = () => {
    return (
        <section className={'section'}>
            <div className={'container'}>
            <div className={'section-left'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="black"/>
                </svg>
                <p className={'section-left__title'}>jersey</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="black"/>
                </svg>
                <p className={'section-left__title'}>nike & nba collaboration</p>
            </div>
                <div className="section-center">
                    <h1>jersey </h1>
                        <img src={Group} alt=""/>
                        <h2>nba</h2>

                </div>
                <div className={'section-right'}>
                    <p className={'section-right__title'}>
                        whichever <span>nba</span> <span>team</span> your support, get your jersey here today.
                    </p>
                </div>
                <img className={'section-img'} src={Picture} alt=""/>
            </div>
        </section>
    );
};

export default HeroSection;