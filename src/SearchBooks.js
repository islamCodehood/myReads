import React, { Component } from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
    render() {
        return (
            <div className="search-books">
                <SearchForm />
                <SearchResults />
            </div>
        )
    }
}

export default SearchBooks