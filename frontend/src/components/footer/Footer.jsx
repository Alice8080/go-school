import { Link } from "react-scroll";
import { Icon } from '@iconify/react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__blocks">
                <div className="footer__block">
                    <h5 className="footer__title">Школа го</h5>
                    <div className="footer__links">
                        <Link
                            to="about"
                            className='footer__link'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={100}>
                            О школе
                        </Link>
                        <Link
                            to="services"
                            className='footer__link'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={100}>
                            Услуги
                        </Link>
                        <Link
                            to="contacts"
                            className='footer__link'
                            spy={true}
                            smooth={true}
                            offset={-130}
                            duration={100}>
                            Контакты
                        </Link>
                    </div>
                </div>
                <div className="footer__block">
                    <h6>Адрес</h6>
                    <p className="footer__text">
                        Санкт-Петербург, ул. Гатчинская, д. 28, <br /> вход № 4, 3 этаж, пом. 6 к 401 <br />
                    </p>
                </div>
                <div className="footer__block">
                    <h6>Контакты</h6>
                    <p className="footer__text">
                        <Icon className="footer__icon" icon="pepicons-pop:phone-circle-filled" />
                        <a href="tel:+ 79893546285">+ 7 (989) 354 62 85</a> <br /> <br />
                        <a href="https://t.me/zvezda_go">
                            <Icon className="footer__icon" icon="akar-icons:telegram-fill" />
                            Наш телеграм <span>zvezda_go</span>
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer__copyright">
                © Школа го, 2023
            </div>
        </footer>
    );
}

export default Footer;