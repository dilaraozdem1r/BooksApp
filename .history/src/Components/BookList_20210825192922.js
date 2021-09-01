import React from 'react';
import {Link} from 'react-router-dom';


const Books = (props) => {

    const truncateOverview =(string, maxLength) =>{
        if(!string) return null;
        if(string.length < maxLength ) return string;
        return `${string.substring(0,maxLength)}...`
    }


    return (

        //<div className='row'>
<div className="row row-cols-1 row-cols-md-3 g-4">
 

            {props.books.map((book,i) => (
                

                <div className='col ' key={i} >
                     
                    <div className='card' style={{width:"80%", height:"60%"}}>
                        <img src={book.imageURL} className="card-img-top" alt="sample image" />
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text"> {truncateOverview(book.overview,100)}</p>

                            <div className="d-flex justify-content-between align-items-center">
                            <span className="badge rounded-pill bg-secondary">{book.author}</span>
                            <button type="button" onClick={(event)=>props.deleteBook(book)} className="btn btn-md btn-outline-danger">Delete</button>
                            
                            <Link type="button"
                             className="btn btn-md btn-outline-primary"
                             to={`edit/${book.id}`}
                             >Edit</Link>
                            
                            <Link type="button"
                             image={book.imageURL}
                             className="btn btn-md btn-outline-primary"
                             to={`show/${book.id}`}
                             >Show</Link>

                            </div>
                               
                        </div>
                    </div>
                </div>
                

            ))}
        
        </div>


    )



}

export default Books;