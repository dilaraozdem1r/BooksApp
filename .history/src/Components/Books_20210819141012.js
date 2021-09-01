import React from 'react';



const Books = (props) => {

    return (

        //<div className='row'>
<div className="row row-cols-1 row-cols-md-3 g-4">
 

            {props.books.map((book) => (
                

                <div className='col col-lg-4' key={book.id} >
                     <div class="card h-100">
                    <div className='card mb-4 shadow-sm'>
                        <img src={book.imageURL} className="card-img-top" alt="sample image" />
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text"> {book.overview}</p>

                            <h2><span className="badge bg-info">{book.author}</span></h2>
                        </div>
                    </div>
                </div>
                </div>

            ))}
        
        </div>


    )



}

export default Books;