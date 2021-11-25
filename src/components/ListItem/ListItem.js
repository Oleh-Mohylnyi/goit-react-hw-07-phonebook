import React from "react";
import s from './listItem.module.scss'
import PropTypes from 'prop-types'

export default function ListItem({
    contact,
    backgroundColorItem,
    deleteContact,
    statusCheckbox }) {

    const { name, phone, id } = contact

    let classNameBtn = 'btn_delete'
    if (!statusCheckbox) {
        classNameBtn += ' hidden'
    }

    return (
        <li
            style={backgroundColorItem}
            className={s.item}>
            <div className={s.contactSpan}>
                <div>
                <span>{name} </span>
                </div>
                <span>{phone} </span>
            </div>
            <button
                type="button"
                className={classNameBtn}
                onClick={() => deleteContact(id)}>
                Delete
            </button>
        </li>
        )
}

ListItem.propTypes = {
    backgroundColorItem: PropTypes.object,
    deleteContact: PropTypes.func,
    statusCheckbox: PropTypes.bool,
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })
    }