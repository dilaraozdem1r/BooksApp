import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component{

    render(){
        return(

            <div>
                <form className="d-flex">
                <img src="https://e7.pngegg.com/pngimages/152/157/png-clipart-stitched-co-computer-icons-magnifying-glass-search-icon-miscellaneous-logo-thumbnail.png" alt="" width="50" height="40" class="d-inline-block align-text-top"/> 
            <input className="form-control me-50"  type="text" placeholder="search a book" aria-label="Search" onChange={this.props.search}/>
            
            
         </form>
         </div>

        )
    }
}
export default SearchBar;