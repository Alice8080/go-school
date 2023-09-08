import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';
import hero5 from '../../assets/images/hero5.jpg';
import hero6 from '../../assets/images/hero6.jpg';
import { useState } from 'react';
import './hero.scss';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(true);
    };

    return (
        <div className="hero">
            <div className={`hero__photos  ${isVisible ? 'active' : null}`}>
                <div className={`hero__images hero__images_left ${isVisible ? 'active' : null}`}>
                    <img className="hero__image hero__image_1" src={hero6} />
                    <img className="hero__image hero__image_2" src={hero1} />
                    <img className="hero__image hero__image_3" src={hero3} />
                </div>
                <svg className={`hero__board board ${isVisible ? 'board__hide' : null}`} viewBox="0 0 538 548" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.862183" y1="438.638" x2="0.862183" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="55.3514" y1="438.638" x2="55.3514" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="109.841" y1="438.638" x2="109.841" y2="1.36221" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="164.33" y1="438.638" x2="164.33" y2="1.36221" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="220.181" y1="438.638" x2="220.181" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line y1="-0.5" x2="435.748" y2="-0.5" transform="matrix(1 1.25303e-05 -1.58586e-05 1 1.52771 1.2049)" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="275.67" y1="1.36227" x2="275.67" y2="438.638" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="329.159" y1="438.638" x2="329.159" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="384.649" y1="1.36227" x2="384.649" y2="438.638" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="438.138" y1="440" x2="438.138" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="2.72439" y1="0.947968" x2="438.638" y2="0.862233" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="1.36208" y1="55.3514" x2="437.275" y2="55.2657" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="1.36208" y1="109.841" x2="437.275" y2="109.755" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="1.36218" y1="164.33" x2="438.638" y2="164.33" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="435.913" y1="219.819" x2="0.000128857" y2="219.905" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="1.36374" y1="273.308" x2="438.335" y2="274.67" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="435.935" y1="330.159" x2="1.36231" y2="330.245" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line x1="1.36218" y1="383.649" x2="438.638" y2="383.649" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <line y1="-0.5" x2="437.276" y2="-0.5" transform="matrix(-1 0.000561211 -0.000710282 -1 437.276 438.638)" stroke="#FFFFF0" strokeOpacity="0.8" />
                    <circle cx="220" cy="220" r="6.13003" fill="#FFFFF0" />
                    <circle cx="109.659" cy="111.022" r="6.13003" fill="#FFFFF0" />
                    <circle cx="328.978" cy="111.022" r="6.13003" fill="#FFFFF0" />
                    <circle cx="328.978" cy="330.341" r="6.13003" fill="#FFFFF0" />
                    <circle cx="109.659" cy="330.341" r="6.13003" fill="#FFFFF0" />
                    <circle onClick={handleClick} fill={isVisible ? "rgb(6, 6, 6)" : "rgba(217, 217, 217, 0.00)"} className="circle board__click-circle" cx="328.852" cy="329.952" r="20.2523" stroke="#FFFFF0" strokeOpacity={isVisible ? "0.3" : "0.8"} strokeDasharray={isVisible ? "" : "5 5"} style={{'animation': isVisible ? 'none' : 'moving 3s infinite linear', 'transition': isVisible ? 'none' : '2s all'}} />
                    <path d="M435.887 458.504C435.061 458.567 434.442 459.287 434.504 460.113L435.522 473.575C435.584 474.401 436.304 475.02 437.13 474.957C437.956 474.895 438.575 474.175 438.513 473.349L437.609 461.383L449.575 460.478C450.401 460.416 451.02 459.696 450.957 458.87C450.895 458.044 450.175 457.425 449.349 457.487L435.887 458.504ZM537.159 544.966L436.978 458.862L435.022 461.138L535.203 547.241L537.159 544.966Z" fill="#FFFFF0" fillOpacity="0.7" />
                </svg>
                <div className={`hero__images hero__images_right ${isVisible ? 'active' : null}`}>
                    <img className="hero__image hero__image_4" src={hero4} />
                    <img className="hero__image hero__image_5" src={hero5} />
                    <img className="hero__image hero__image_6" src={hero2} />
                </div>
            </div>
            {isVisible ? <h1 className='hero__subtitle'>Игра, которая <span>прокачивает <br /> твое мышление</span></h1> : <h1 id='hero__title'>Поставь свой <br /> первый камень</h1>}
        </div>
    );
}

export default Hero;