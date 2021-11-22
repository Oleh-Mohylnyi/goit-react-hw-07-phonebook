import React from "react";
import s from './filter.module.scss'
import {setFilter} from '../../redux/contacts/actions';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getContactsFilter } from '../../redux/contacts/selectors';


export default function Filter() {
    const filter = useSelector(getContactsFilter);
    const dispatch = useDispatch();
    
    const handleChange = (e) => dispatch(setFilter(e.target.value));

    return (
        <label className={s.label}>
            Find contacts by name
            <input
                type="text"
                name="filter"
                className={s.input}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                autoComplete="off"
                onChange={handleChange}
                value={filter}>
            </input>
        </label>
    );
}

