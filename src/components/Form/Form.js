// import React, { useEffect } from "react";
import React, { useEffect, useState } from "react";
import s from './form.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getContactsItems } from '../../redux/contacts/selectors';
import {addContact, fetchContacts} from "../../redux/contacts/operations";


export default function Form() {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contactsItems = useSelector(getContactsItems);
    const dispatch = useDispatch();

    useEffect(() => {

    dispatch(fetchContacts())
    },
    // eslint-disable-next-line     
    [])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value)
        };
        if (name === 'number') {
            setNumber(value)
        };
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        saveForm(name, number)
        setName('')
        setNumber('')
    };

    const saveForm = (name, number) => {
    
        const regNumber = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
        const regName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

        if (contactsItems.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts`)
        } else {
            if (name === '' || number === '') {
                alert("Do not save contact without a name or number")
            } else {
                if (!regName.test(name)) {
                    alert("Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.")
                } else {
                    if (!regNumber.test(number)) {
                        alert("Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +")
                    } else {
                        dispatch(addContact(name, number))

                    }
                }
            }
        }
    };

    return (
        <form className={s.form}>

            <label className={s.label}> Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={name}
                    className={s.input}
                />
            </label>
            <br />
            <label className={s.label}> Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={number}
                    className={s.input}
                />
            </label>
            <br />
            <button
                type="submit"
                className={s.btn}
                onClick={handleSubmit}>
                Add contact
            </button>
            
        </form>
    );
}
