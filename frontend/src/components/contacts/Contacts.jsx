import { Icon } from '@iconify/react';
import './contacts.scss';
import contacts from '../../assets/images/contacts.png';

const Contacts = () => {
    return (
        <section id="contacts" className="section contacts">
            <h2>Ждём тебя у нас</h2>
            <div className="contacts__blocks">
                <img className="photos__image photos__image_vertical" src={contacts} />
                <div className="contacts__block">
                    <h3>Санкт-Петербург, ул. Гатчинская, д. 28, вход № 4, 3 этаж, пом. 6 к 401 <br /></h3>
                    <h4>
                        <a href="tel:+ 79893546285">+ 7 (989) 354 62 85</a>
                    </h4>
                    <h5>
                        <a href="https://t.me/zvezda_go">
                            <Icon className="contacts__icon" icon="akar-icons:telegram-fill" />
                            <span>zvezda_go</span>
                        </a>
                    </h5>
                </div>
            </div>
        </section>
    );
}

export default Contacts;