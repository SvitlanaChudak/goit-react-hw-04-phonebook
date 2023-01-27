import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import toast from 'react-hot-toast';

export class App extends Component {

state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

    formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
      };
      const isExist = this.state.contacts.find(input =>
        input.name.toLowerCase() === contact.name.toLowerCase() || input.number === contact.number);
      if (isExist) {
        alert(`${name} is already in contacts`)
        return
      }
      this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
      }));
      toast.success('New contact successfully added');
  };

    filterInput = event => {
    this.setState({ filter: event.target.value });
  };

  findContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

    componentDidMount() {
      const contacts = localStorage.getItem('contacts');
      if (contacts !== null) {
        const parsedContacts = JSON.parse(contacts);
        this.setState({ contacts: parsedContacts });
      }
}

    componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

    render() {
       
        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formSubmit} contacts={this.state.contacts}/>
                
                <h2>Contacts</h2>
                <Filter filter={this.state.filter} onChange={this.filterInput}/>
                <ContactList  contacts={this.findContact()} deleteContact={this.deleteContact}/>
            </Container>
    )
}

}
