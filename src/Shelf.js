import React from "react";
import Book from "./Book";

function Shelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.shelfBooks
            .filter(book => book.shelf === props.value)
            .map(book => (
              <li key={book.id}>
                <Book
                  cover={book.imageLinks.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  bookId={book.id}
                  book={book}
                  changeShelf={props.changeShelf}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;
