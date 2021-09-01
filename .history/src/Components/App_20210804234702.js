import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';
import Books from './Books';

class App extends React.Component {
    state = {
        movies: []
    }

    componentDidMount(){
        const response=axios.get("http://localhost:3002");
        this.setState({movies:response.data})
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