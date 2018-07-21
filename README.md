# My Reads

### Contents:

- [Description](#description).
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
