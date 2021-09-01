import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{

    render(){
        return(

            <div>
                <form className="d-flex" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-o86obF-UTdLqsqqiUM6O82URx7R52fXlw&usqp=CAU">
               
            <input className="form-control me-50"  type="text" placeholder="search a book" aria-label="Search" onChange={this.props.search}/>
            
            
         </form>
         </div>

        )
    }
}
export default SearchBar;