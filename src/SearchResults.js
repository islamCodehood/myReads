import React, { Component } from 'react'
import Book from './Book'
import sortBy from 'sort-by'

class SearchResults extends Component {
  
    render() {
        let resultedBooks = this.props.books
        resultedBooks.sort(sortBy('title'))
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    {//Check if the search return any result. If so start mapping the array.
                        resultedBooks.length > 0 && 
                        //filter only the books that has covers to display.
                        resultedBooks.filter(book => book.imageLinks !==undefined)
                                        .map(book => (<li key={book.id}>
                        <Book 
                            cover={book.imageLinks.thumbnail} 
                            title={book.title} 
                            authors={book.authors} 
                            bookId={book.id}
                            book={book}
                            changeShelf={this.props.changeShelf}
                            shelf={book.shelf}
                        />
                      </li>))}  
                </ol>
            </div>
        )
    }
}

export default SearchResults