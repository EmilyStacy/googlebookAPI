import React, {Component} from 'react';
import './App.css';
import BookList from './BookApp/BookList';
import Form from './Form/form';
import Config from './config';
//callback API
//pass value of booklist
//search filter function
//printtype filter function
//booktype filter function
//curriculum:state
//this.state = 
class App extends Component {
  constructor(props){
    super(props)
    this.state= 
    { q:'Henry',
      error:null,
      booklist:[],

    }
    this.handleSearch = this.handleSearch.bind(this);
  }
    componentDidMount(){
    this.setState({loading:true});
    fetch(`${Config.API_ENDPOINT}q=${this.state.q}`
     )
    
    .then(res=> {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    } )
      // .then(console.log(res.json)).=> don't do it
    .then(data => {
      this.setState (
        {booklist:data.items,
         loading:false
         })
        console.log(this.state.booklist);
    }
    )
      .catch(error => this.setState({error}));
      
  }
//how to define current PrintFilter and currentTypeFilter (set state in form.js)

 handleSearch(query,currentPrintFilter,currentTypeFilter) {
   let url = `${Config.API_ENDPOINT}q=${query}`
     if (currentPrintFilter){
      url+=`&printType=${currentPrintFilter}`
      } 
      if(currentTypeFilter){
        url+=`&filter=${currentTypeFilter}`
      }
   fetch(url)
  //  fetch(`${Config.API_ENDPOINT}q=${query}`)
   .then(res => res.json())
   .then(data => this.setState({
     booklist:data.items,
     error:null
    }
     ))
    }
    
      
  render(){
    let loading=this.state.loading;

  return (
    <main className="App">
      <header className="header">
      <h1>Google Book Search</h1>
      </header>
      {loading!==false?<div class="load-bar">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              </div>: ''}
      <Form className="Form" onHandleSearch={this.handleSearch} />
      <BookList booklist={this.state.booklist} />
      
    </main>
  );
}
}

export default App;
