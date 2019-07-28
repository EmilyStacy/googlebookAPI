import React, {Component} from 'react';
import "./Book.css";

class Book extends Component { 
    render(){
        let thumbnail; 
        if (this.props.data.volumeInfo.imageLinks ===undefined) {
            thumbnail=null; 
        }else {
            thumbnail=this.props.data.volumeInfo.imageLinks.thumbnail;
        }
        
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
                    <h2 className="header2"> {this.props.data.volumeInfo.title} </h2>
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
