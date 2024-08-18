import Modal from 'react-modal';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

// ------------------------------------------

import css from './Modal.module.css'

// ------------------------------------------

const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
};


Modal.setAppElement('#root');

export default function ModalOrder({isOpen, onClose, order,}) {

    const [orderDone, setOrderDone] = useState('')

    // const orderedSet = data.find(curr => curr.id === orderId)
    const initial = {
        name: '',
        number: '',
        future: '',
        address: '',
        time: ''
    }

    const Schema = Yup.object().shape({
        name: Yup.string()
            .matches(/^[А-Яа-яіІЇїЄєҐґ\s]+$/, 'Ваше ім\'я українською')
            .min(2, 'Ім\'я закоротке')
            .max(15, 'Надто довге')
            .required('Не забудьте вказати Ваше ім\'я'),
        number: Yup.string()
            .matches(/^\d{5,12}$/, 'Невірний формат: 360111111111')
            .required('Маємо знати, як з Вами зв\'язатись'),
        future: Yup.string()
            .matches(/^[А-Яа-яЇїЄєҐґ\s]{0,20}$/, 'Українською, та не більше 20 символів будь ласка'),
        time: Yup.string()
            .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Час у форматі ГГ:ХХ')
            .required('То о котрій доставити?'),
        address: Yup.string()
            .matches(/^[А-Яа-яЇїЄєҐґ0-9\s,.-]+$/, 'Невірний формат')
            .required('То куди привезти?')
    });
    
    
    function onSubmit(values) {
        console.log([values, order])
        setOrderDone(nanoid())
        
    }

    return (
        <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={() => onClose(false)}
        className={css.modal}
        >
            <button className={css.btnClose} onClick={() => onClose(false)} type='button'>Закрити</button>
            {orderDone === '' ? (<div className={css.box}>
            <div className={css.yourOrder}>
                <p>Ваше замовлення</p>
                <p>Сет №{order.number} - {order.price} грн</p>
                <img src={order.image} alt="img" />
            </div>
            <Formik
            initialValues={initial}
            onSubmit={onSubmit}
            validationSchema={Schema}
            >
                <Form className={css.form}>
                    <label htmlFor="orderName"> Ваше ім&apos;я</label>
                    <Field type='text' name='name' id='orderName'></Field>
                    <ErrorMessage className={css.error} name='name' component='span'></ErrorMessage>
                    <label htmlFor="orderTel">Ваш телефон</label>
                    <Field type='tel' name='number' id='orderTel'></Field>
                    <ErrorMessage className={css.error} name='number' component='span'></ErrorMessage>
                    <label htmlFor="orderFutures">Коментар</label>
                    <Field type='text' name='future' id='orderFutures'></Field>
                    <ErrorMessage className={css.error} name='future' component='span'></ErrorMessage>
                    <label htmlFor="orderAddress">Ваша адреса</label>
                    <Field type='text' name='address' id='orderAddress'></Field>
                    <ErrorMessage className={css.error} name='address' component='span'></ErrorMessage>
                    <label htmlFor="orderTime">Час доставки</label>
                    <Field type='text' name='time' id='orderTime'></Field>
                    <ErrorMessage className={css.error} name='time' component='span'></ErrorMessage>
                    <button type='submit'>Замовити</button>                    
                </Form>
            </Formik></div>) : (<div> 
                <p>Дякуємо, Ваше замовлення № &apos;{orderDone}&apos; прийняте. Очікуйте дзвінка оператора.</p>
            </div>)}

        </Modal>
    )
}