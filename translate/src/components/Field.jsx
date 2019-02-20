import React from "react";
import LanguageContext from '../contexts/LanguageContext'

// When using contextType to access this.context we can always only access one Context object at a time.

class Field extends React.Component {
    // This is where we're declaring the class Button, therefore when we write the below contextType code, we're adding the LanguageContext to the Button's properties.
    // this is how we hook up a context object to a class component
  static contextType = LanguageContext; // static contextType must be exactly contextType, this is not a foobar banana variable.
  // ^^ equivalent to writing Field.contextType = LanguageContext
  render() {
      const text = this.context.language === 'english' ? 'Name' : 'Naam'
    return (
      <div className="ui field">
        <label>{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;