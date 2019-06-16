import React, {Component} from 'react';
import "./Book.css";

//render a book with image(left), book name, author, price, description

class Book extends Component { 
    render(){
         //const sales = this.props.data.saleInfo.saleability==="FOR-SALE"?this.props.data.saleInfo.retailPrice.amount:"N/A"
        //return sales;
        //how to show the price with the $ sign? how to deal with the conditional situation when the books is not for sale?
        //cannot call back the description from the API
        console.log(this.props.data);
        console.log(this.props.data.saleInfo.saleability);
        console.log(this.props.data.volumeInfo.imageLinks.thumbnail);
        return (<div className="item">
                    <h2 class="header2"> {this.props.data.volumeInfo.title} </h2>
                    <div className="general">
                        <img src={this.props.data.volumeInfo.imageLinks.thumbnail} alt="book image"/>
                        <div className="info">
                            <p>{this.props.data.volumeInfo.authors}</p>
                            <p>Price</p> 
                            {/* <p>{this.props.data.categories.description}</p> */}
                             <p>Description</p>
                        </div>
                    </div>
               </div>
            )
    }
}

export default Book;

//e.target.value