import { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from '@mona-health/react-input-mask';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Cookies } from 'react-cookie';
import logo from '../../assets/images/big_logo.jpg';
import Spinner from "../spinner/Spinner";

const cookies = new Cookies();

const OrderForm = ({ rate, toggle }) => {
    const [status, setStatus] = useState();

    const createdAt = () => {
        const now = new Date();
        return `${now.toLocaleDateString()}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }

    const send = async (info) => {
        setStatus('pending');
        let response = await fetch('https://zvezdago.ru/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "X-CSRFToken": cookies.get('csrftoken')
            },
            credentials: "same-origin",
            body: JSON.stringify(info)
        });
        setStatus(response.ok ? 'success' : 'error');
    };

    const rates = [
        ['not_decided', 'Я еще не определился'],
        ['promotional', 'Акционный тариф'],
        ['group', 'Хочу в группе больше'],
        ['one_on_one', 'Давай один на один'],
        ['one_on_one_2', 'Давай один на один 2.0'],
    ];

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                rate,
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Это обязательное поле'),
                email: Yup.string()
                    .required('Это обязательное поле')
                    .email('Некорректно введен email'),
                phone: Yup.string()
                    .required('Это обязательное поле'),
            })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values) => {
                const phone = values.phone
                    .replace(/\)/g, '')
                    .replace(/\(/g, '')
                    .replace(/-/g, '')
                    .replace(/ /g, '');
                send({ ...values, phone, creation_date: createdAt() });
            }}>
            {({ values, setFieldValue }) => (
                <Form className="modal__form">
                    <ModalHeader toggle={toggle}>Заполните контактные данные</ModalHeader>
                    <ModalBody className='modal__body'>
                        <div className="modal__fields">
                            <div>
                                <TextField
                                    id="name"
                                    name="name"
                                    label="Ваше имя"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    onChange={e => {
                                        const value = e.target.value || '';
                                        setFieldValue('name', value);
                                    }}
                                />
                                <ErrorMessage className='modal__input-error' component="div" name="name" />
                            </div>
                            <div>
                                <TextField
                                    id="email"
                                    name="email"
                                    label="Электронная почта"
                                    defaultValue=""
                                    sx={{ mb: 2 }}
                                    placeholder="example@gmail.ru"
                                    onChange={e => {
                                        const value = e.target.value || '';
                                        setFieldValue('email', value);
                                    }}
                                />
                                <ErrorMessage className='modal__input-error' component="div" name="email" />
                            </div>

                            <div>
                                <InputMask mask="+7 (999) 999-99-99" onChange={e => {
                                    const value = e.target.value || '';
                                    setFieldValue('phone', value);
                                }}>
                                    <TextField
                                        name="phone"
                                        label="Телефон"
                                        defaultValue=""
                                        sx={{ mb: 2 }}
                                    />
                                </InputMask>
                                <ErrorMessage className='modal__input-error' component="div" name="phone" />
                            </div>
                            <div className="modal__options">
                                <label className='modal__label' htmlFor='rate'>Тариф</label>
                                <Select
                                    id="rate"
                                    name="rate"
                                    sx={{ fontSize: '14px', mb: 2 }}
                                    value={values.rate}
                                    onChange={(e) => setFieldValue('rate', e.target.value)}
                                    inputProps={{ 'aria-label': 'Without label' }}>
                                    {rates.map((item, i) => <MenuItem key={i} value={item[0]}>{item[1]}</MenuItem>)}
                                </Select>
                                <ErrorMessage className='modal__input-error' component="div" name="rate" />
                            </div>
                        </div>
                        <div className="modal__logo">
                            <img className="modal__img" src={logo} />
                        </div>
                    </ModalBody>
                    {
                        status === 'success' ?
                            <div className='modal__result'>Спасибо за запись на занятие в Школе го! На указанную почту отправлено письмо с данными о записи.</div> :
                        status === 'error' ?
                            <div className='modal__result'>При отправке данных произошла ошибка. Перезагрузите страницу и попробуйте еще раз.</div>
                        : null
                    }
                    <ModalFooter>
                        {
                            status === 'pending' ? (
                                <div className="modal__spinner">
                                    <Spinner />
                                </div>
                            ) : (
                                <button type="submit" className="modal__submit">
                                    Записаться
                                </button>
                            )
                        }
                        <button type="button" className="modal__cancel" onClick={toggle} disabled={status === 'pending'}>
                            Отменить
                        </button>
                    </ModalFooter>
                </Form>
            )}
        </Formik>
    );
}

export default OrderForm;