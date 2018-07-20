import React from "react";
import Header from "./Header";
import Shelf from "./Shelf";
import AddBook from "./AddBook";

function BookList(props) {
  return (
    <div className="list-books">
      <Header />
      <div className="list-books-content">
        <div>
          <Shelf
            shelfBooks={props.books}
            name={"Want To Read"}
            value={"wantToRead"}
            changeShelf={props.changeShelf}
          />
          <Shelf
            shelfBooks={props.books}
            name={"Currently Reading"}
            value={"currentlyReading"}
            changeShelf={props.changeShelf}
          />
          <Shelf
            shelfBooks={props.books}
            name={"Read"}
            value={"read"}
            changeShelf={props.changeShelf}
          />
        </div>
      </div>
      <AddBook />
    </div>
  );
}

export default BookList;
