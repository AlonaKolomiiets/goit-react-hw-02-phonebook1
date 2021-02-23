import React, { Component } from "react";
// import PropTypes from 'prop-types';

class ContactList extends Component {
  state = {
    contacts: [],
  };

  addToPhonebook = (item) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, item],
    }));
  };

  render() {
    return (
      <div>
        <ul>
          {this.contacts.map((item) => (
            <li key={item.id}>name</li>
          ))}
        </ul>
      </div>
    );
  }
}

// ContactList.propTypes = {

// };

export default ContactList;
