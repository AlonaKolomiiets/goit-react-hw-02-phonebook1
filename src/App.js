import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import ContactList from "./components/ContactList/ContactList";
// import PropTypes from 'prop-types';

class App extends Component {
  // initialState = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   name: "",
  //   number: "",
  // };
  state = {
    // contacts: [],
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    filter: "",
    number: "",
  };

  inputHeandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const singleContact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    console.log(singleContact);
    this.addToPhonebook(singleContact);
    // this.setState({ ...this.initialState });
  };

  addToPhonebook = (newContact) => {
    this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState((prev) => ({
          contacts: [...prev.contacts, newContact],
        }));
  };

  filterContacts = ({ target }) => {
    const { value } = target;
    // this.setState({ [name]: value });
    const { contacts, filter } = this.state;
    const insensitiveValue = value.toLowerCase();
    if (filter.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(insensitiveValue)
      );
    } else {
      return contacts;
    }
  };
  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };
  render() {
    const { name, number, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.inputHeandler}
              type="text"
              name="name"
              placeholder="Enter name..."
              value={name}
            ></input>
          </label>
          <label>
            <input
              onChange={this.inputHeandler}
              type="tel"
              name="number"
              placeholder="Enter number..."
              value={number}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
        {/* <ContactForm  /> */}

        <h2>Contacts</h2>
        <p>Fined contacts by name</p>
        <label>
          <input
            onChange={this.filterContacts}
            type="text"
            name="filter"
            placeholder="Enter name..."
            value={filter}
          />
        </label>
        <ul>
          {/* {this.filterContacts().map((contact) => (
            <li key={contact.id}>
              {contact.name}:{contact.number}
              <button onClick={() => this.deleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))} */}
        </ul>
        {/* <Filter />
  <ContactList /> */}
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
