import React, { Component } from 'react'
import Header from './Header'
import Shelf from './Shelf'
import AddBook from './AddBook'

class BookList extends Component {
    render() {
        return (
            <div className="list-books">
                <Header />
                <div className="list-books-content">
                    <div>
                        <Shelf />
                        <Shelf />
                        <Shelf />
                    </div>
                </div>    
                <AddBook />  
            </div>          
        )
    }
}

export default BookList