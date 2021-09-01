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
          <img src="http://upload.turkcewiki.org/wikipedia/en/thumb/1/1c/Penguin_logo.svg/1200px-Penguin_logo.svg.png" alt="" width="50" height="40" class="d-inline-block align-text-top"/>
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