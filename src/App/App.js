import React from 'react';
import './App.css';
import Form from '../components/Form'
import List from '../components/List'
import Filter from '../components/Filter';
import { useSelector } from 'react-redux';
import {getContactsItems} from '../redux/contacts/selectors'

function App() {

  
  const contactsItems = useSelector(getContactsItems);

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
