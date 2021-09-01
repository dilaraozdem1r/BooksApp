import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';
import Books from './Books';
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
        const listItems = books.map((number) => console.lof(number.imageUrl);
    }
     
      render() {
        return (
            <div>

         
          <div><Books books={this.state.books}/></div>
          
          </div>
          

        );
}
}
export default App;