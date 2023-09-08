import Modal from '../modal/Modal';
import rates from '../../assets/images/rates.png';
import './rates.scss';

const Rates = () => {
    return (
        <section id="services" className="section rates">
            <h2>Выбери удобный тебе способ познавать и отдыхать с игрой</h2>
            <div className="rates__discounts">
                <div className="rates__block rates__block_1">
                    <h3>Акционный</h3>
                    <div className='rates__info'>
                        <img className="rates__image" src={rates} />
                        <div>
                            <p>Групповое занятие <span>один</span> раз в неделю</p>
                            <div className="rates__prices">
                                <span className='rates__price'>2 000 ₽</span> <br />
                                <span className='rates__price_old'>3 000 ₽</span>
                            </div>
                            <Modal buttonLabel='Записаться' buttonClass='rates__button' rate='promotional' />
                        </div>
                    </div>
                </div>
                <div className="rates__block rates__block_2">
                    <h3>Акция</h3>
                    <p>Стоимость акционного тарифа до 31.12 за первый месяц обучения</p>
                </div>
            </div>
            <div className="rates__options">
                <div className="rates__block">
                    <h4>Способ <br /> <span>Хочу в группе больше</span></h4>
                    <h5>1,5 часа /  2 раза в неделю</h5>
                    <ul>
                        <li>обучение по нашей методике;</li>
                        <li>постоянная практика с игроками твоего уровня из группы;</li>
                        <li>дружное сообщество;</li>
                        <li>ежемесячный экзамен для самоконтроля и оценки игрового опыта;</li>
                        <li>зачисления в рейтинг спортсменов со старта обучения.</li>
                    </ul>
                    <div className="rates__prices">
                        <span className='rates__price'>4 990 ₽</span> <br />
                        <span className='rates__price_old'>8 990 ₽</span>
                    </div>

                    <Modal buttonLabel='Записаться' buttonClass='rates__button' rate='group' />
                </div>
                <div className="rates__block">
                    <h4>Способ <br /> <span>Давай один на один</span></h4>
                    <h5>1,5 часа /  1 раз в неделю</h5>
                    <ul>
                        <li> уникальная методика преподавания, основанная на твоих личностных качествах;</li>
                        <li>деликатный подход к нашим го-спаррингам с учётом твоей силы игры (ты бей, я подстроюсь);</li>
                        <li>я с тобой на постоянном онлайн-коннекте по всем вопросам теории и практики;</li>
                        <li>я подберу тебе турниры, оправлю тебя на них и прослежу, чтобы ты был к ним готов.</li>
                    </ul>
                    <div className="rates__prices">
                        <span className='rates__price'>8 000 ₽</span> <br />
                        <span className='rates__price_old'>12 000 ₽</span>
                    </div>

                    <Modal buttonLabel='Записаться' buttonClass='rates__button' rate='one_on_one' />
                </div>
                <div className="rates__block">
                    <h4>Способ <br /> <span>Давай один на один 2.0</span></h4>
                    <h5>1,5 часа /  2 раза в неделю</h5>
                    <ul>
                        <li> уникальная методика преподавания, основанная на твоих личностных качествах;</li>
                        <li>деликатный подход к нашим го-спаррингам с учётом твоей силы игры (ты бей, я подстроюсь);</li>
                        <li>я с тобой на постоянном онлайн-коннекте по всем вопросам теории и практики;</li>
                        <li>я подберу тебе турниры, оправлю тебя на них и прослежу, чтобы ты был к ним готов.</li>
                    </ul>
                    <div className="rates__prices">
                        <span className='rates__price'>12 000 ₽</span> <br />
                        <span className='rates__price_old'>20 000 ₽</span>
                    </div>
                    <Modal buttonLabel='Записаться' buttonClass='rates__button' rate='one_on_one_2' />
                </div>
            </div>

        </section>
    );
}

export default Rates;