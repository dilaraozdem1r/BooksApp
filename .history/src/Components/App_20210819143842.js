import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';
import Books from './BookList';
import axios from 'axios'

class App extends React.Component {
    state = {
        books: []
    }

    async componentDidMount() {
      this.getBooks();
  
    }
    async getBooks(){
        const response=await axios.get(" http://localhost:3004/books");
        
        this.setState({books:response.data})
  
    }
     
      render() {
        return (
            <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
    <a class="navbar-brand" href="#">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>



          </nav>
         
          <div><Books books={this.state.books}/></div>
          
          </div>
          

        );
}
}
export default App;