import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import toast from 'react-hot-toast';

export const App = () => {
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem('contacts')) ?? [] });
  const [filter, setFilter] = useState('');

  useEffect(() => { localStorage.setItem('contacts', JSON.stringify(contacts)) }, [contacts]);

    const formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
      };
      const isExist = contacts.find(input =>
        input.name.toLowerCase() === contact.name.toLowerCase() || input.number === contact.number);
      if (isExist) {
        alert(`${name} is already in contacts`)
        return
      }
      setContacts([contact, ...contacts]);
      toast.success('New contact successfully added');
  };

    const filterInput = event => {
    setFilter(event.target.value);
  };

  const findContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id),);
  };

        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={formSubmit} contacts={contacts}/>
                
                <h2>Contacts</h2>
                <Filter filter={filter} onChange={filterInput}/>
                <ContactList  contacts={findContact()} deleteContact={deleteContact}/>
            </Container>
    )

}
