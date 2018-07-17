import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    
    render() {
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.shelfBooks.filter(book => book.shelf === this.props.value)
                                          .map(book => (<li key={book.id}>
                        <Book 
                            cover={book.imageLinks.thumbnail} 
                            title={book.title} 
                            authors={book.authors} 
                            shelf={book.shelf} 
                            bookId={book.id}
                            book={book}
                            changeShelf={this.props.changeShelf}
                        />
                      </li>))}
                    </ol>
                  </div>
                </div>
        )
    }
}

export default Shelf