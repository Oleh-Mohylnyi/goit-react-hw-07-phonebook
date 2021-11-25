
import { combineReducers } from 'redux';
import {setFilter} from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';


const initialContacts = [
];

const itemsReducer = createReducer(initialContacts, {
    [fetchContacts.fulfilled]: (_, {payload}) => payload,
    [addContact.fulfilled]: (state, {payload}) => [...state, payload],
    [deleteContact.fulfilled]: (state, {payload} ) => state.filter(({id}) => id !== payload.id)
});

const filterReducer = createReducer('', {
    [setFilter]: (state, actions) => actions.payload
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
});

export default contactsReducer;