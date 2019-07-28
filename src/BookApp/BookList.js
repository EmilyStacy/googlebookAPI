import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {   

render() {
    const bookElement = this.props.booklist.map(book => 
    (<Book data={book}/>) )
    
     return (<div>  
            <ul>
                {bookElement}
            </ul>
         
          </div>)
}
}

export default BookList;


