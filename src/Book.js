import React from "react";
import ShelfChanger from "./ShelfChanger";

function Book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.cover})`
          }}
        />
        <ShelfChanger
          changeShelf={props.changeShelf}
          bookId={props.bookId}
          book={props.book}
          currentShelf={props.shelf}
        />
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
  );
}

export default Book;
