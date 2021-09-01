import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Books from './BookList';
import axios from 'axios'
import SearchBar from './SearchBar'

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
  searchMovie = (event) => {
    this.setState({
      searchQuery: event.target.value
    })

  }

  render() {

    let filteredBooks = this.state.books.filter(
      (book) => {
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
                    <a class="navbar-brand">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-o86obF-UTdLqsqqiUM6O82URx7R52fXlw&usqp=CAU" alt="" width="50" height="40" class="d-inline-block align-text-top" />
                    </a>

                    <SearchBar search={this.searchMovie} />
                    <div className="col ol-md-5">
                      <Link
                        to="/admin"
                        type="button"
                        className="btn btn-danger"
                        style={{ float: 'right' }}
                      >Admin Login</Link>
                    </div>

                  </div>
                </nav>
              </div>
              <div>
                <Books books={filteredBooks} />
              </div>

            </React.Fragment>)}>
          </Route>

        </Switch>
      </Router>
    );
  }
}
export default App;