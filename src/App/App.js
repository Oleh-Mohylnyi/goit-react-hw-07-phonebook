import React from 'react';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import './App.css';
import Form from '../components/Form'
import List from '../components/List'
import Filter from '../components/Filter';
import { useSelector } from 'react-redux';
import { getContactsItems } from '../redux/contacts/selectors';
import {fetchContacts} from "../redux/contacts/operations";

function App() {
  
    const dispatch = useDispatch();
    const contactsItems = useSelector(getContactsItems);
  
    useEffect(() => {
    dispatch(fetchContacts())
    },
    // eslint-disable-next-line     
    [])
  

    return (
      <div className="app">
        <h1>Phonebook</h1>

        <Form />
      
        {contactsItems.length > 0
          ? (<>
            <h2>Contacts</h2>
            <Filter />
            <List />
          </>)
          : (<p>no contacts at the moment</p>)
        }
      </div>
    );
    
}

export default App;
