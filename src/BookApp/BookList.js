import React, {Component} from 'react';
import Book from './Book';
//use the API callback to pass the value of booklist
//pass down the state to BookList and Book
class BookList extends Component {   

render() {
    console.log(this.props.booklist);
    const bookElement = this.props.booklist.map(book => 
    (<Book data={book}/>) )
    //don't call back the whole object 
    
     return (<div>  
            <ul>
                {bookElement}
            </ul>
         
          </div>)
}
}

export default BookList;


