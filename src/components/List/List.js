import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/ListItem";
import s from './list.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts } from '../../redux/contacts/selectors';
import {deleteContact} from '../../redux/contacts/operations'


export default function List() {
    const [editCheckbox, setEditCheckbox] = useState(false)

    const filtredContacts = useSelector(getFiltredContacts);
    const dispatch = useDispatch();
    const delContact = (id) => dispatch(deleteContact(id));

    useEffect(() => {
        if (filtredContacts.length === 0) {
            setEditCheckbox(false)
        }
    }, [filtredContacts.length]
    );

    let classNameCheckbox = 'checkboxEdit';
    if (editCheckbox) {
    classNameCheckbox += ' checkboxEditActive'
    };

    const backgroundColorItem = contact =>
        filtredContacts.indexOf(contact) % 2 === 0
            ? { backgroundColor: 'transparent' }
            : { backgroundColor: 'white' };

    return (
        <div className={s.contactsList}>
            <label className={classNameCheckbox}>
                Edit
                <input
                    type="checkbox"
                    className={s.hidden}
                    checked={editCheckbox}
                    onChange={() => setEditCheckbox(!editCheckbox)}
                />
            </label>
            <ul className={s.list}>
                {filtredContacts !== 0 &&
                    filtredContacts.map(contact =>
                        <ListItem
                            key={contact.id}
                            contact={contact}
                            backgroundColorItem={backgroundColorItem(contact)}
                            statusCheckbox={editCheckbox}
                            deleteContact={delContact}
                        />
                    )}
            </ul>
        </div>
    );
}


