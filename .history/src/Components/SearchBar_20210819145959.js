import React from 'react';
class SearchBar extends React.Component{
    render(){
        return(

            <div><form className="d-flex">
                <div className="col col-md-8">
            <input className="form-control me-2"  type="text" placeholder="search a book" aria-label="Search"/>
            </div>
            
         </form>
         </div>

        )
    }
}
export default SearchBar;