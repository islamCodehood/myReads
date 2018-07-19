import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchForm extends Component {
    
    render() {
        return (
            <div className="search-books-bar">
                  <Link className="close-search" to="/">Close</Link>
                  <div className="search-books-input-wrapper">
                    <input
                        type="text" 
                        placeholder="Search by title or author"
                        onChange={this.props.handleChange}
                        value={this.props.value}
                    />
                  </div>
            </div>
        )
    }
}

export default SearchForm