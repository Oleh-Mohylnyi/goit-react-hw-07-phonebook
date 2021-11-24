
import { combineReducers } from 'redux';
import {setFilter} from './actions';
import { createReducer } from '@reduxjs/toolkit';
import {
    // addContactError,
    // addContactRequest,
    // addContactSuccess,
    // deleteContactSuccess,
    // deleteContactError,
    // deleteContactRequest,
    // fetchContactsSuccess,
    // fetchContactsRequest,
    // fetchContactsError
} from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';


const initialContacts = [
    // {name:"my_home", number:"1232254", id:"43kj5"}, {name:"my_work", number:"1232254", id:"sdgfvev5"}
];

const itemsReducer = createReducer(initialContacts, {
    [fetchContacts.fulfilled]: (_, {payload}) => payload,
    [addContact.fulfilled]: (state, {payload}) => [...state, payload],
    [deleteContact.fulfilled]: (state, {payload}) => state.filter(item => item.id !== payload)
});

const filterReducer = createReducer('', {
    [setFilter]: (state, actions) => actions.payload
});

const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: filterReducer
});

// const loading = createReducer(false, {
//     [addContactRequest]: () => true,
//     [addContactSuccess]: () => false,
//     [addContactError]: () => false,
//     [deleteContactRequest]: () => true,
//     [deleteContactSuccess]: () => false,
//     [deleteContactError]: () => false,
// [fetchContacts.pending]: () => true
// });

// const error = createReducer(null, {
// [fetchContacts.rejected]: (_, {payload}) => payload
// });

export default contactsReducer;