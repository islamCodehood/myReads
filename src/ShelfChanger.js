import React, { Component } from 'react'

class ShelfChanger extends Component {
    handleChange = (evt) => {
        this.props.changeShelf(evt.target.value, this.props.book)
    }
    render() {
        return (
            <div className="book-shelf-changer">
              <select onChange={this.handleChange}>
                <option value="move" disabled selected>Move to...</option>
                <option value="wantToRead">Want to Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        )
    }
}

export default ShelfChanger