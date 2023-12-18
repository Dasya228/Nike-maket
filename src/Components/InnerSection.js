import React from 'react';
import boxImg from "../image/DRTwwktVwAARX0P 1.png";
import Group2 from "../image/Group 2.png";

const InnerSection = () => {
    return (
        <section className={'black-section'}>
            <div className={'container'}>
                <h3 className={'black-section__text'}>Jerseys 1992 team usa</h3>
                <div className={'black-section-container'}>
                    <h3 className={'black-section__kobe'} style={{color:'#FB0223'}}>
                        <span style={{color:'#0949EF'}}>1992</span> team usa
                    </h3>


                </div>
                <div className={'black-section-container'}>
                    <h2 className={'black-section__collection'}>Authentic edition
                    </h2>
                </div>
                <div style={{padding:'24px 0 28px 0'}}>
                    <p className={'black-section__infoKobe'}>Jerseys of the united sates man’s olympics basketball team,

                    </p>
                    <p className={'black-section__infoKobe'}>which represented the us of a in the 1992 summer olympics in barcelona.

                    </p>
                </div>
                <div className={'row'}>
                    <div className={'col-4'}>
                        <div className="box">
                            <img src={boxImg} alt={'error'}/>
                            <div className={'box-text'}>
                                <p className={'box-text__price'}>Michael Jordan ‘92 Olympics USA</p>
                                <p className={'box-text__gray'}>Nike NBA ‘92 Olympics Dream Team USA Classics Authentic Jersey
                                </p>

                            </div>
                            <span className={'box-text__price'}>$532</span>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className="box">
                            <img src={boxImg} alt={'error'}/>
                            <div className={'box-text'}>
                                <p className={'box-text__price'}>Michael Jordan ‘92 Olympics USA</p>
                                <p className={'box-text__gray'}>Nike NBA ‘92 Olympics Dream Team USA Classics Authentic Jersey
                                </p>

                            </div>
                            <span className={'box-text__price'}>$632</span>
                        </div>
                    </div>
                    <div className={'col-4'}>
                        <div className="box">
                            <img src={boxImg} alt={'error'}/>
                            <div className={'box-text'}>
                                <p className={'box-text__price'}>Kobe Bryant Laker Authentic Edition</p>
                                <p className={'box-text__gray'}>Nike NBA Authentic Jersey Purple</p>

                            </div>
                            <span className={'box-text__price'}>$115</span>
                        </div>
                    </div>
                </div>
                <div className={'black-section-wrap'}>
                    <div style={{paddingTop:'30px'}}>
                        <span>View all</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="9" viewBox="0 0 61 9" fill="none">
                            <path d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z" fill="#FB0223"/>
                        </svg>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default InnerSection;