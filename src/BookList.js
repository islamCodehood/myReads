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
                        <Shelf 
                            shelfBooks={this.props.books} 
                            name={"Want To Read"} 
                            value={"wantToRead"} 
                            changeShelf={this.props.changeShelf}
                        />
                        <Shelf 
                            shelfBooks={this.props.books} 
                            name={"Currently Reading"} 
                            value={"currentlyReading"} 
                            changeShelf={this.props.changeShelf}
                        />
                        <Shelf 
                            shelfBooks={this.props.books} 
                            name={"Read"} 
                            value={"read"} 
                            changeShelf={this.props.changeShelf}
                        />
                    </div>
                </div>    
                <AddBook />  
            </div>          
        )
    }
}

export default BookList