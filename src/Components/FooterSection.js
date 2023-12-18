import React from 'react';
import Pict from '../image/Pict2.png'

const FooterSection = () => {
    return (
        <section className={'card-section'}>
            <div className={'container'}>
                <h3 className={'card-section__text'}>the application</h3>
                <div className={'card-section-container'}>
                    <h2 className={'card-section__title'} style={{color:'#77D131'}}>the nike</h2>
                </div>
                <div className={'card-section-container'}>
                    <h2 className={'card-section__every'}>App</h2>
                </div>
                <div style={{padding:'24px 0 28px 0'}}>
                    <div>
                        <p className={'section-container__info'}>Here you can find many interesting and useful from nike.

                        </p>
                        <p className={'section-container__info'}>Download the application from nike.

                        </p>
                    </div>
                    <img src={Pict} alt={'error'} style={{padding:'28px 0 16px 0'}} />
                    <div className={'nba-container'}>
                        <h4 className={'nba-container__text'}>Nike Traning Club</h4>
                        <h4 className={'nba-container__title'}>Home workouts & fitness plans</h4>
                    </div>
                <div className={'card-section_span'}>
                    <span>About Team</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                        <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                    </svg>
                </div>
            </div>
            </div>


        </section>
    );
};

export default FooterSection;