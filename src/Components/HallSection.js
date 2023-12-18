import React from 'react';
import Slider from '../image/Slider.png'

const HallSection = () => {
    return (
        <section className={'section'}>
            <div className={'container hallContainer'}>
                <h4 className={'card-section__text'}>Hall of fame</h4>
                <div className={'section-container'}>
                    <h2 className={'section-container__title'}>basketball</h2>
                </div>
                <div className={'section-container'}>
                    <h2 className={'section-container__text'}>hall of fame</h2>
                </div>
                <div className={'section-container'}>
                    <div style={{padding: '24px 0 40px 0'}}>
                        <p className={'section-container__info'}>The naismith memorial basketball hall of fame is home
                            to more than
                        </p>
                        <p className={'section-container__info'}>Four nundred iductees and more than 40 000 square feet
                            of basketball history. <svg xmlns="http://www.w3.org/2000/svg" width="142" height="8"
                                                        viewBox="0 0 142 8" fill="none">
                                <path
                                    d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645ZM1 4.5H61V3.5H1V4.5Z"
                                    fill="#FB0223"/>
                                <path
                                    d="M141.354 4.35355C141.549 4.15829 141.549 3.84171 141.354 3.64645L138.172 0.464466C137.976 0.269204 137.66 0.269204 137.464 0.464466C137.269 0.659728 137.269 0.976311 137.464 1.17157L140.293 4L137.464 6.82843C137.269 7.02369 137.269 7.34027 137.464 7.53553C137.66 7.7308 137.976 7.7308 138.172 7.53553L141.354 4.35355ZM81 4.5H141V3.5H81V4.5Z"
                                    fill="#FB0223"/>
                            </svg>
                        </p>
                    </div>
                </div>
                <div className={'section-innerContainer'}>
                    <span>2005</span>
                    <span>2006</span>
                    <span>2007</span>
                    <span>2008</span>
                    <span style={{color: '#FB0223'}}>2009</span>
                    <span>2010</span>
                    <span>2011</span>
                    <span>2012</span>
                </div>
                <div className={'section-container'}>
                    <div className={'slider-container'}>
                        <img src={Slider} alt="error"/>
                        <div className={'section-container-date'}>
                            <span>1959</span>
                            <span>2019</span>
                        </div>
                    </div>
                </div>
                <div className={'section-innerContainer innerContainer-wrap'}>
                    <h3 className={'section-innerContainer__name'}><span
                        style={{color: '#FB0223'}}>michael</span> jordan</h3>
                    <div className={'container-view'}>
                        <span>View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                            <path
                                d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z"
                                fill="#FB0223"/>
                        </svg>
                    </div>
                </div>
                <div className={'section-innerContainer innerContainer-wrap'}>
                    <h3 className={'section-innerContainer__name'}><span
                        style={{color: '#C5C5C5'}}>david</span> robinson</h3>
                    <div className={'container-view'}>
                        <span>View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                            <path
                                d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z"
                                fill="#FB0223"/>
                        </svg>
                    </div>
                </div>
                <div className={'section-innerContainer innerContainer-wrap'}>
                    <h3 className={'section-innerContainer__name'}><span style={{color: '#094E10'}}>john</span> stockton
                    </h3>
                    <div className={'container-view'}>
                        <span>View</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                            <path
                                d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z"
                                fill="#FB0223"/>
                        </svg>
                    </div>
                </div>
                <div className={'section-innerContainer'}>
                    <div className={'wrap-title'}>
                        <p className={'wrap-title__text'}>Official Site</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                            <path
                                d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z"
                                fill="#FB0223"/>
                        </svg>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HallSection;