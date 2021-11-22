
import axios from 'axios';
// import { v4 as uuid } from 'uuid';
import {
    addContactError,
    addContactRequest,
    addContactSuccess,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsError,
    fetchContactsSuccess,
    fetchContactsRequest
} from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6193ffd50b39a70017b156b8.mockapi.io/api';

export const addContact = (name, number) => dispatch => {
    const contact = {
        // id: uuid(),
        name,
        phone: number
    };
    
    dispatch(addContactRequest());
    
    axios.post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
            .catch(error => dispatch(addContactError(error)))
};

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
    
    axios.delete(`/contacts/:${id}`)
        .then(({ id }) => dispatch(deleteContactSuccess(id)))
            .catch(error => dispatch(deleteContactError(error)))
};

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//         const { data } = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess(data));
//     } catch ( error ) {
//         dispatch(fetchContactsError(error));
//     }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchContactRequest',
    async () => {
        const { data } = await axios.get('/contacts');
        return data
     }
);