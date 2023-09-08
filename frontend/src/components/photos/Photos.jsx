import Modal from '../modal/Modal';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';
import img7 from '../../assets/images/img7.png';
import img8 from '../../assets/images/img8.png';
import img9 from '../../assets/images/img9.png';
import img10 from '../../assets/images/img10.png';
import img11 from '../../assets/images/img11.png';
import './photos.scss';

const Photos = () => {
    return (
        <section className="section photos">
            <h2>Смотри, как круто мы проводим время</h2>
            <div className="photos__blocks">
                <div className="photos__block photos__block_1">
                    <img className="photos__image photos__image_vertical" src={img1} />
                    <img className="photos__image photos__image_vertical" src={img2} />
                    <div className='photos__text photos__text_1'>
                        <p>Здесь может быть твоё фото</p>
                        <img className="photos__image photos__image_small" src={img11} />
                    </div>
                    <img className="photos__image photos__image_vertical" src={img3} />
                </div>
                <div className="photos__block photos__block_2">
                    <img className="photos__image photos__image_vertical" src={img4} />
                    <img className="photos__image photos__image_vertical" src={img5} />
                    <img className="photos__image photos__image_horizontal" src={img6} />
                </div>

                <div className="photos__block photos__block_3">
                    <img className="photos__image photos__image_vertical" src={img7} />
                    <div className='photos__text photos__text_2'>
                        <p>Мы очень любим экспериментировать, постоянно искать новое, даже в такой древней игре</p>
                    </div>
                    <img className="photos__image photos__image_vertical" src={img8} />
                    <img className="photos__image photos__image_vertical" src={img9} />
                </div>

                <div className="photos__block photos__block_4">
                    <img className="photos__image photos__image_horizontal" src={img10} />
                    <div className='photos__text photos__text_3'>
                        <p>И это далеко не все, чем мы занимаемся вместе</p>
                        <Modal buttonLabel='Записаться и прийти' buttonClass='photos__button' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Photos;