import Modal from '../modal/Modal';
import './description.scss';
import description from '../../assets/images/description.png';

const Description = () => {
    return (
        <section className="section description">
            <h2>А есть что-то ещё</h2>
            <div className="description__blocks">
                <div className="description__block description__block_1">
                    <h3>Постоянные турниры</h3>
                    <p>Мы постоянно проводим турниры, чтобы тебе было, где приложить свои новые навыки.
                        <br />
                        Мы проследим, чтобы ты попал туда, куда должен попасть, а после разберём твои результаты.</p>
                    <Modal buttonLabel='Хочу играть больше' buttonClass='description__button' />
                </div>

                <div className="description__block description__block_2">
                    <h3>Мы не просто играем в Го, мы — сообщество</h3>
                    <p>Мы постоянно ищем что-то новое — новые места, мероприятия, активности, и обязательно отправляемся туда вместе.
                        <br />
                        Вливайся!</p>
                    <Modal buttonLabel='Влиться' buttonClass='description__button' />
                </div>

                <div className="description__block description__block_3">
                    <h3>У нас есть разные игры, основанные на Го</h3>
                    <p>В мире есть не только классическое го, но ещё и разные игры на его основе. Некоторые из них мы придумали сами, а какие-то стильно оформили. Если тебе это интересно или нужен комплект — жми!</p>
                    <a href='https://starykh.store/index.php?route=product/category&path=61' target='_blank' className='description__button'>Мне интересно!</a>
                </div>

                <div className="description__block_4">
                    <img className="description__image" src={description} />
                </div>
            </div>
        </section>
    );
}

export default Description;