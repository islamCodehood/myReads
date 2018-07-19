import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchForm 
                  handleChange={this.props.updateQuery} 
                  value={this.props.query}
                />
                <SearchResults 
                  books={this.props.books}
                  changeShelf={this.props.selectShelf}
                />
            </div>
        )
    }
}

export default SearchBooks