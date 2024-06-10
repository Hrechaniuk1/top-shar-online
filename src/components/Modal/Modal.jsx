import Modal from 'react-modal';
import css from './Modal.module.css'
import { Formik, Field, Form } from 'formik';

import data from '../../data/data'
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
  content: {
    top: '30%',
        left: '50%',
        transform: 'translate(-50%, -40%)',
      padding: '20px',
    minWidth: '300px',
    maxWidth: '900px',
      height: 'auto',
      overflow: 'hidden',
      overflowY: 'scroll',
      backgroundColor: 'white',
      borderColor: 'transparent',
  },
};


Modal.setAppElement('#root');

export default function ModalOrder({isOpen, onClose, orderId,}) {

    const [orderDone, setOrderDone] = useState('')

    const orderedSet = data.find(curr => curr.id === orderId)
    const initial = {
        name: '',
        number: '',
        future: '',
        address: '',
        time: ''
    }
    function onSubmit(values) {
        console.log([values, orderedSet])
        setOrderDone(nanoid())
        
    }

    return (
        <Modal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={() => onClose(false)}
        >
            <button className={css.btnClose} onClick={() => onClose(false)} type='button'>Закрити</button>
            {orderDone === '' ? (<div className={css.box}>
            <div className={css.yourOrder}>
                <p>Ваше замовлення</p>
                <p>Сет №{orderedSet.number} - {orderedSet.price} грн</p>
                <img src={orderedSet.img} alt="img" />
            </div>
            <Formik
            initialValues={initial}
            onSubmit={onSubmit}
            >
                <Form className={css.form}>
                    <label htmlFor="orderName"> Ваше ім&apos;я</label>
                    <Field type='text' name='name' id='orderName'></Field>
                    <label htmlFor="orderTel">Ваш телефон</label>
                    <Field type='tel' name='number' id='orderTel'></Field>
                    <label htmlFor="orderFutures">Коментар</label>
                    <Field type='text' name='future' id='orderFutures'></Field>
                    <label htmlFor="orderAddress">Ваша адреса</label>
                    <Field type='text' name='address' id='orderAddress'></Field>
                    <label htmlFor="orderTime">Час доставки</label>
                    <Field type='text' name='time' id='orderTime'></Field>
                    <button type='submit'>Замовити</button>                    
                </Form>
            </Formik></div>) : (<div> 
                <p>Дякуємо, Ваше замовлення № &apos;{orderDone}&apos; прийняте. Очікуйте дзвінка оператора.</p>
            </div>)}

        </Modal>
    )
}