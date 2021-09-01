import React from 'react';
class SearchBar extends React.Component{
    render(){
        return(

            <div><form className="d-flex">
               
            <input className="form-control me-5"  type="text" placeholder="search a book" aria-label="Search"/>
            </div>
            
         </form>
         </div>

        )
    }
}
export default SearchBar;