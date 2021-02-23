import React from "react";
// import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <>
      <li key={id}>
        {name}:{number}
        <button onClick={() => deleteContact(id)}>Delete</button>
      </li>
    </>
  );
};

// ContactListItem.propTypes = {

// };

export default ContactListItem;
