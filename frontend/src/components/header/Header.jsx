import { Link } from "react-scroll";
import Modal from '../modal/Modal';
import logo from '../../assets/images/logo.png';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <img className="header__logo" src={logo} alt="Логотип" />
        <div className='header__links'>
          <Link
            to="about"
            className='header__link'
            spy={true}
            smooth={true}
            offset={-130}
            duration={100}>
            О школе
          </Link>
          <Link
            to="services"
            className='header__link'
            spy={true}
            smooth={true}
            offset={-130}
            duration={100}>
            Услуги
          </Link>
          <Link
            to="contacts"
            className='header__link'
            spy={true}
            smooth={true}
            offset={-130}
            duration={100}>
            Контакты
          </Link>
          <Modal buttonLabel='Хочу записаться!' buttonClass='header__button' />
        </div>
      </div>
    </header>
  );
}

export default Header;