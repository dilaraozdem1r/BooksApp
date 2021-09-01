import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{

    handleFormSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return(

            <div>
                <form onSubmit={this.handleFormSubmit}className="d-flex">
               
            <input className="form-control me-50"  type="text" placeholder="search a book" aria-label="Search"/>
            
            
         </form>
         </div>

        )
    }
}
export default SearchBar;