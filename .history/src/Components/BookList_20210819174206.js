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
 

            {props.books.map((book) => (
                

                <div className='col ' key={book.id} >
                     
                    <div className='card' style={{ width: '25rem' }}>
                        <img src={book.imageURL} className="card-img-top" alt="sample image" />
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text"> {truncateOverview(book.overview,100)}</p>

                            <h2><span class="badge rounded-pill bg-info text-dark">{book.author}</span></h2>
                        </div>
                    </div>
                </div>
                

            ))}
        
        </div>


    )



}

export default Books;