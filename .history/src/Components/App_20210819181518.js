import React from 'react'
import User from './User'
import Books from './BookList';
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {
    books: [],
    searchQuery:""
  }

  async componentDidMount() {
    this.getBooks();

  }
  async getBooks() {
    const response = await axios.get(" http://localhost:3004/books");

    this.setState({ books: response.data })

  }
  searchMovie=(event)=>{
    this.setState({
      searchQuery:event.target.value
    })

  }

  render() {

    let filteredBooks=this.state.books.filter(
      (book)=>{
        return book.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 }
    ).sort((a,b)=>{
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 ;
    });

    

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
            <a class="navbar-brand">
          <img src="https://i.pinimg.com/originals/dc/da/8b/dcda8b78587483e5855c78396e1b5a32.jpg" alt="" width="40" height="35" class="d-inline-block align-text-top"/>
           BOOKS
    </a>

            <SearchBar search={this.searchMovie} />
            </div>
 
        </nav>
          
        
    
           
          <div>
              <Books books={filteredBooks} />
          </div>
          
      </div>
        );
}
}
        export default App;