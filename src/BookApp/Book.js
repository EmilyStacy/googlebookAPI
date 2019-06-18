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
        console.log("thisis",this.props.data);
        let narration;
        if(this.props.data.volumeInfo.description===undefined){
            narration=null;
        }else{
            narration=this.props.data.volumeInfo.description;
        }
        let price;
        if(this.props.data.saleInfo ===undefined) {
            price = null;
        }
        else{
            if (this.props.data.saleInfo.saleability !== undefined){
                price=this.props.data.saleInfo.saleability;
            }

            if(this.props.data.saleInfo.listPrice !==undefined){
                price=`$${this.props.data.saleInfo.listPrice.amount}`;
            }
        }
        

        return (<div className="item">
                    <h2 class="header2"> {this.props.data.volumeInfo.title} </h2>
                    <div className="general">
                        {thumbnail !==null ?<img src={thumbnail}/>:<div className="placeholder">No image</div>}
                        <div className="info">
                            <p>{this.props.data.volumeInfo.authors}</p>
                            <p>{price}</p>  
                        </div>
                    </div>
                    {narration!==null?<div className="text">{narration} </div>:<div className="placeholder"> </div>}
               </div>
            )
    }
}

export default Book;
