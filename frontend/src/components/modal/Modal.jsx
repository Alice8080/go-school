import { useState } from 'react';
import { Modal } from 'reactstrap';
import OrderForm from '../orderForm/OrderForm';
import 'react-phone-input-2/lib/style.css';
import './modal.scss';

const CustomModal = ({ buttonLabel, buttonClass, rate = 'not_decided' }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    return (
        <div>
            <button onClick={toggle} className={buttonClass}>
                {buttonLabel}
            </button>
            <Modal isOpen={modal} toggle={toggle}>
                <OrderForm rate={rate} toggle={toggle} />
            </Modal>
        </div>
    );
}

export default CustomModal;