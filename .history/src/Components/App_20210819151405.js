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
        return book.name.tolowerCase().indexOf(this.searchQuery.tolowerCase()) !== -1
      }
    ).sort((a,b)=>{
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0 ;
    });

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">HOME</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
           <SearchBar/>
        </div>

    </nav>
    
           
          <div>
         
            <Books books={this.state.books} />
            </div>
          
      </div>
        );
}
}
        export default App;