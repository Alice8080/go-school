import './acquaintance.scss';
import acquaintance from '../../assets/images/acquaintance.png';

const Acquaintance = () => {
    return (
        <section id="about" className="section acquaintance">
            <div className="acquaintance__block">
                <h2>Давайте знакомиться</h2>
                <div className="acquaintance__info">
                    <img className="acquaintance__img" src={acquaintance} />
                    <div className="acquaintance__text">
                        <p>
                            Привет, меня зовут Александр. Я практикующий спортсмен, педагог и лидер клубного Го-движения России. Я начал играть в Го в 2014 году, а уже в 2018 году основал Го-центр «Звезда» и с тех пор руковожу им. Я точно знаю, как идти по пути познания Го.
                        </p>
                        <p>
                            Я за живое общение, а не скучное онлайн-образование. Моя философия заключается в познании себя через игру и превращении игры в инструмент, который ты можешь применить в реальной жизни. Как это? Узнаешь всё при встрече.
                        </p>
                    </div>
                </div>
            </div>
            <div className="acquaintance__blocks">
                <div className="acquaintance__small-block">
                    С 2014 <br /> года
                </div>
                <div className="acquaintance__small-block">
                    100+ <br /> турниров
                </div>
                <div className="acquaintance__small-block">
                    100{'<'} <br /> учеников
                </div>
            </div>
        </section>
    );
}

export default Acquaintance;