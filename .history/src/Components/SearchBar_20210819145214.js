import React from 'react';
class SearchBar extends React.Component{
    render(){
        return(

            <div><form className="d-flex">
            <input className="form-control me-2"  type="text" className="form-control" placeholder="search a book" aria-label="Search"/>
            
         </form>
         </div>

        )
    }
}
export default SearchBar;