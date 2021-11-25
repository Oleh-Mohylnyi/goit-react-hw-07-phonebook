
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://619d65ca131c600017088eee.mockapi.io/api/v1';

export const addContact = createAsyncThunk('contacts/addContact',
    async ({ name, number }) => {
    const contact = {
        name,
        phone: number
    };
    const { data } = await axios.post('/contacts', contact);
    return data;
    }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (id) => {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
}
)

export const fetchContacts = createAsyncThunk('contacts/fetchContact',
    async () => {
        const { data } = await axios.get('/contacts');
        return data
     }
);