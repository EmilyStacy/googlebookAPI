import React, {Component} from 'react';
import "./Book.css";

//render a book with image(left), book name, author, price, description

class Book extends Component { 
    render(){
         //const sales = this.props.data.saleInfo.saleability==="FOR-SALE"?this.props.data.saleInfo.retailPrice.amount:"N/A"
        //return sales;
        //how to show the price with the $ sign? how to deal with the conditional situation when the books is not for sale?
        //cannot call back the description from the API
        // console.info(this.props.data.volumeInfo.imageLinks);
        let thumbnail; 
        if (this.props.data.volumeInfo.imageLinks ===undefined) {
            thumbnail=null; 
        }else {
            thumbnail=this.props.data.volumeInfo.imageLinks.thumbnail;
        }

        console.log("this is",this.props.data.categories)

        return (<div className="item">
                    <h2 class="header2"> {this.props.data.volumeInfo.title} </h2>
                    <div className="general">
                        {thumbnail !==null ?<img src={thumbnail}/>:<div className="placeholder">No image</div>}
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
