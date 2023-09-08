import Hero from '../components/hero/Hero';
import ForWhom from '../components/forWhom/ForWhom';
import Acquaintance from '../components/acquaintance/Acquaintance';
import Photos from '../components/photos/Photos';
import Advantages from '../components/advantages/Advantages';
import Rates from '../components/rates/Rates';
import Description from '../components/description/Description';
import Reviews from '../components/reviews/Reviews';
import Contacts from '../components/contacts/Contacts';

const Home = () => {
    return (
    <div className="home">
        <Hero />
        <ForWhom />
        <Acquaintance />
        <Photos />
        <Advantages />
        <Rates />
        <Description />
        <Reviews />
        <Contacts />
    </div>
    );
}

export default Home;