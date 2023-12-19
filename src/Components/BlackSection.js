import React, {useEffect, useState} from 'react';
import boxImg from '../image/DRTwwktVwAARX0P 1.png'
import Group2 from '../image/Group 2.png'
import axios from "axios";

const BlackSection = () => {
    const [data,setData]=useState([])
    useEffect(() => {
        axios('https://65812d0d3dfdd1b11c429081.mockapi.io/nike/nike')
            .then(({data}) => setData(data))
    }, []);
    return (
        <section className={'black-section'}>
            <div className={'container'}>
                <h3 className={'black-section__text'}>Jerseys bestsellers</h3>
                <div className={'black-section-container'}>
                    <h2 className={'black-section__title'}>bestsellers</h2>
                </div>
                <div className={'black-section-container'}>
                    <h2 className={'black-section__collection'}>Collection</h2>
                </div>
                <h3 className={'black-section__info'}>The jerseys of the best nba players of the regular seasons.</h3>
                <div className={'row'}>
                    {
                        data.map(el=>
                            <div className={'col-4'}>
                                <div className="box">
                                    <img src={el.src} alt={'error'}/>
                                    <div className={'box-text'}>
                                        <p className={'box-text__price'}>{el.name}</p>
                                        <p className={'box-text__gray'}>{el.description}</p>

                                    </div>
                                    <span className={'box-text__price'}>{el.price}</span>
                                </div>
                            </div>
                        )
                    }


                </div>
                <div className={'black-section-wrap'}>
                  <div>
                      <span>View all</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                          <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                      </svg>
                  </div>
                    <img src={Group2} alt="error"/>
                </div>
            </div>

        </section>
    );
};

export default BlackSection;