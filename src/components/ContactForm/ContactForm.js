import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  initialState = {
    name: "",
    number: "",
  };
  state = {
    name: "",
    number: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const singleContact = {
      name: this.state.name,
      number: this.state.number,
      id: uuidv4(),
    };
    // console.log(singleContact);
    this.props.addToPhonebook(singleContact);
    this.setState({ ...this.initialState });
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };
  
  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              onChange={this.inputHandler}
              type="text"
              name="name"
              placeholder="Enter name..."
              value={name}
            ></input>
          </label>
          <label>
            <input
              onChange={this.inputHandler}
              type="tel"
              name="number"
              placeholder="Enter number..."
              value={number}
            ></input>
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

// ContactForm.propTypes = {

// };

export default ContactForm;
