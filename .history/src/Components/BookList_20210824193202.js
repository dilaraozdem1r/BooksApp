import React from 'react';



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

                            <span class="badge rounded-pill bg-secondary">{book.author}</span>
                            <div><button type="button" onClick={(event)=>props.deleteBook(book)} className="btn btn-md btn-outline-danger">Delete</button>
                            </div>
                               
                        </div>
                    </div>
                </div>
                

            ))}
        
        </div>


    )



}

export default Books;