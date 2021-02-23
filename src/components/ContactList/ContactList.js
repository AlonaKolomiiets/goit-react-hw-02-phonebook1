import React from "react";
import ContactListItem from "./ContactListItem";
// import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {

// };

export default ContactList;
