import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from './BookList';
import axios from 'axios'
import SearchBar from './SearchBar'
import AddBook from './AddBook';

class App extends React.Component {
  state = {
    books: [],
    searchQuery: ""
  }

  async componentDidMount() {
    this.getBooks();

  }
  async getBooks() {
    const response = await axios.get(" http://localhost:3004/books");

    this.setState({ books: response.data })

  }
  searchBook = (event) => {
    this.setState({
      searchQuery: event.target.value
    })

  }

  addBook =async (book)=>{
    await axios.post("http://localhost:3004/books/",book)
    this.setState(state=>({
      books:state.books.concat([book])
    }))
    this.getBooks();
  }

  deleteBook= async(book)=>{
    axios.delete(` http://localhost:3004/books/${book.id}`)
    const newBookList=this.state.books.filter(
      m=> m.id != book.id
    );
    this.setState(state=>({
      books:newBookList
    }))
  }


  render() {

    let filteredBooks = this.state.books.filter(
      (book) => {
        console.log(book.name)
        return book.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    ).sort((a, b) => {
      return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
    });


    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => (
            <React.Fragment>
              <div>
                <nav className="navbar navbar-light bg-light">
                  <div className="container-fluid">
                    <a className="navbar-brand">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-o86obF-UTdLqsqqiUM6O82URx7R52fXlw&usqp=CAU" alt="" width="50" height="40" class="d-inline-block align-text-top" />
                    </a>

                    <SearchBar search={this.searchBook} />
                    <Link 
                            to="/add"
                            type="button"
                            className="btn btn-danger"
                            style={{ float: 'right' }}
                        >Add Book</Link>

                  </div>
                </nav>
              </div>
              <div>
                <Books books={filteredBooks} deleteBook={this.deleteBook}/>
              </div>

            </React.Fragment>)}>
          </Route>
          <Route path="/add" render={({history})=>(
            <AddBook onAddBook={(book)=>{
              this.addBook(book)
              history.push("/")
            }}/>
            
            )}> 

          </Route>

        </Switch>
      </Router>
    );
  }
}
export default App;