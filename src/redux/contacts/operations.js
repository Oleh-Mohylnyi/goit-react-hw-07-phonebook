
import axios from 'axios';
// import { v4 as uuid } from 'uuid';
import {
    // addContactError,
    // addContactRequest,
    // addContactSuccess,
    // deleteContactRequest,
    // deleteContactSuccess,
    // deleteContactError,
    // fetchContactsError,
    // fetchContactsSuccess,
    // fetchContactsRequest
} from './actions';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://619d65ca131c600017088eee.mockapi.io/contacts';

// export const addContact = (name, number) => dispatch => {
//     const contact = {
//         // id: uuid(),
//         name,
//         phone: number
//     };
//     dispatch(addContactRequest());
//     axios.post('/contacts', contact)
//         .then(({ data }) => dispatch(addContactSuccess(data)))
//             .catch(error => dispatch(addContactError(error)))
// };


export const addContact = createAsyncThunk('contacts/addContact',
async (name, number) => {
    const contact = { name, number };
    const { data } = await axios.post('', contact);
    return data;
    }
);

// export const deleteContact = id => dispatch => {
//     dispatch(deleteContactRequest());
//     axios.delete(`/contacts/:${id}`)
//         .then(({ id }) => dispatch(deleteContactSuccess(id)))
//             .catch(error => dispatch(deleteContactError(error)))
// };

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id) => {
        const { date } = axios.delete(`/:${id}`);
        console.log(date);
        return date;
}
)

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest());
//     try {
//         const { data } = await axios.get('/contacts');
//         dispatch(fetchContactsSuccess(data));
//     } catch ( error ) {
//         dispatch(fetchContactsError(error));
//     }
// };

export const fetchContacts = createAsyncThunk('contacts/fetchContact',
    async () => {
        const { data } = await axios.get('');
        return data
     }
);