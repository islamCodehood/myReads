# My Reads

### Contents:

- [Description](#description).
- [App URL](#app-url).
- [React App Hierarchy](#react-app-hierarchy).
- [How To Use](#how-to-run).
- [License](#license).


## Description

- This is a React project from Udacity Front-End Nanodegree.
- My Reads is a book tracking app. It divides books into 3 categories: 
    1. Want To Read.
    2. Currently Reading.
    3. Read.
- It also provides search for books by title or author(s).

## App URL

- https://myreads360.netlify.com/

## React App Hierarchy

```bash
├── <BooksApp />
        ├── <BookList />
        |       ├── <Header />
        |       ├── <Shelf />
        |       |       └── <Book />
        |       |             └── <ShelfChanger />
        |       ├── <Shelf />
        |       |       └── <Book />
        |       |              └── <ShelfChanger />
        |       ├── <Shelf />
        |       |       └── <Book />
        |       |              └── <ShelfChanger />
        |       └── <AddBook />
        |
        └── <SearchBooks />
                ├── <SearchForm /> 
                └── <SearchResults />
```


## How To Use

- [Download a zip to your local machine from here](https://github.com/Islam888/myReads/archive/master.zip).
- Decompress the app.
- Using terminal on your local machine go to the folder containing the app.
- Run `npm start`.
- A new browser tab will open with the app running.
- You can now click on the plus button to search a book by title or author.
- When you find the desired book you can add it to the desired shelf.
- Returning back to your library you will find the book on the selected shelf.
- In the search page you can easily check if the book in your library and on which shelf.
- The library is divided into three shelves as mentioned in the app description. You can move the book to another shelf as the status changes. For example if you finished reading a book you can move it from "Currently Reading" shelf to "Read" one.


## License:

- This project is licensed under the terms of the [MIT](https://github.com/Islam888/myReads/blob/master/LICENSE)
