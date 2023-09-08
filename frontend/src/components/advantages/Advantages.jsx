import Accordion from '../accordion/Accordion';
import './advantages.scss';
import advantages_ph from '../../assets/images/advantages_ph.png';

const Advantages = () => {
    const content = [
        {
            id: '1',
            header: 'Не знаешь, куда деть твою необузданную энергию или не можешь сконцентрироваться на одной задаче надолго?',
            text: 'После наших занятий ты полюбишь погружение в процесс размышления и станешь спокойней.'
        },
        {
            id: '2',
            header: 'Ты получишь полностью индивидуальный подход',
            text: 'Твой ритм, твой темп: тебе объяснят столько, сколько нужно именно тебе, и всё это с шутками и чаем. Го — это действительно трудно, так пускай трудное будет весёлым.'
        },
        {
            id: '3',
            header: 'Го — это красиво',
            text: 'Го — очень стильная игра, я точно знаю, что это то, что тебе нужно.'
        },
        {
            id: '4',
            header: 'Ты будешь видеть результаты своего труда',
            text: 'Да-да, ты станешь спортсменом, и твоё мастерство будет только расти.'
        },
        {
            id: '5',
            header: 'Среди друзей и знакомых ты прослывёшь интеллектуалом',
            text: 'Ведь Го это не только самая интересная, но и самая сложная игра в мире, которую ты обязательно освоишь!'
        },
    ];
    return (
        <section className="section advantages">
            <h2>Почему тебе / твоему ребёнку / твоей команде <br /> будет круто с игрой го</h2>
            <div className="advantages__block">
                <img className="advantages__image" src={advantages_ph} />
                <div className="advantages__accordion">
                    <Accordion content={content} />
                </div>
            </div>
        </section>
    );
}

export default Advantages;