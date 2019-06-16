import React, {Component} from 'react';
import './form.css';
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            q: " ",
            currentPrintFilter:null,
            currentTypeFilter:null,
            
        }
        // this.onPrintChangeHandler=this.onPrintChangeHandler.bind(this);
        // this.onTypeChangeHandler=this.onTypeChangeHandler.bind(this);
        this.selectFilter=this.selectFilter(this);
    }

    // onPrintChangeHandler(e){
    //     this.setState({
    //         currentPrintFilter: e.target.value
    //     })
    // }

    // onTypeChangeHandler(e){
    //     this.setState({
    //         currentTypeFilter: e.target.value
    //     })
        
    // }

    selectFilter(){
        this.props.onHandleSearch(this.state.targetvalue)
    }
    render() {
       
        return (
            <form onSubmit={this.props.onHandleSearch}>
                <div className ="search">
                <label htmlFor="Search">Search:</label>
                <input type="text" placeholder="type a word.." name="search" /> 
                <button type="submit" value="Submit" className="button">Search</button>
                </div>
           
                <div className="filter" >
                    <label htmlFor="type">Print Type:</label>
                    <select className="printType" onChange={this.props.onHandleSearch}>
                        <option value="Book">Book </option>
                        <option value="Megazine">Megazine </option>
                    </select>
                    <label htmlFor="bookType">Book Type:</label>
                    <select className="bookType" onChange={this.props.onHandleSearch}>
                    <option value="">No filter </option>
                    <option value="free-ebooks">free-ebooks </option>
                    <option value="paid-ebooks">paid-ebooks </option>

                    </select>
                </div>
            </form>


        )
    }
   }
   
   export default Form;
   // setting the state
   //this.state={
       //currentFilter:null
   //}

  // onChangeHandler(){
//this.setState(
   // currentFilter= e.target.value
//)
   //}


   