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
        <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Navbar</span>
  </div>
  <SearchBar search={this.searchMovie} />
</nav>
          
        
    
           
          <div>
         
            <Books books={filteredBooks} />
            </div>
          
      </div>
        );
}
}
        export default App;