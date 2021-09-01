import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';
import Books from './Books';
import axios from 'axios'

class App extends React.Component {
    state = {
        books: []
    }

    async componentDidMount(){
        const response=axios.get(" http://localhost:3002");
        this.setState({books:response.data})
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