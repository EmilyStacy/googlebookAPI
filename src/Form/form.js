import React, {Component} from 'react';
import './form.css';
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            q: "",
            currentPrintFilter:null,
            currentTypeFilter:null
            
        }
        this.setCurrentPrintFilter=this.setCurrentPrintFilter.bind(this);
        this.setCurrentTypeFilter=this.setCurrentTypeFilter.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.setSearch=this.setSearch.bind(this);
    }
 
    handleSubmit(event){
        event.preventDefault();
        console.log('query is', this.state.q)
        this.props.onHandleSearch(this.state.q,this.state.currentPrintFilter,this.state.currentTypeFilter);
    }

    setCurrentPrintFilter(event){
        event.preventDefault();
        this.setState({currentPrintFilter:event.target.value})
    }

    setCurrentTypeFilter(event){
        event.preventDefault();
        this.setState({currentTypeFilter:event.target.value})
    }

    setSearch(event){
        event.preventDefault();
        this.setState({q:event.target.value})
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className ="search">
                <label htmlFor="Search">Search:</label>
                <input type="text" placeholder="type a word.." name="search" onChange={this.setSearch} value={this.state.q}/> 
                <button type="submit" value="Submit" className="button">Search</button>
                </div>
           
                <div className="filter" >
                    <label htmlFor="type">Print Type:</label>
                    <select className="printType" onChange={this.setCurrentPrintFilter} value={this.state.currentPrintFilter}>
                        <option value="books">Book </option>
                        <option value="magazines">Magazine </option>
                    </select>
                    <label htmlFor="bookType">Book Type:</label>
                    <select className="bookType" onChange={this.setCurrentTypeFilter} value={this.state.currentTypeFilter}>
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
   


   