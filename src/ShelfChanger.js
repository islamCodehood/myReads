import React, { Component } from "react";

class ShelfChanger extends Component {
  handleChange = evt => {
    this.props.changeShelf(this.props.book, evt.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={this.handleChange}
          //set the default value to the book current shelf
          defaultValue={this.props.currentShelf}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="none">None</option>
          <option value="wantToRead">Want to Read</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="read">Read</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
