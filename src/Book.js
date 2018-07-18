import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
    
    render() {
        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.cover})` }}></div>
                    <ShelfChanger 
                        changeShelf={this.props.changeShelf} 
                        bookId={this.props.bookId}
                        book={this.props.book}
                        currentShelf={this.props.shelf}
                        />
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book