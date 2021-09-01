import React from 'react';



class Books extends React.Component {
    render() {
        return (
        
            <div className='row'>

            {props.books.map((book,i) => (
            
                <div className='col col-lg-4' key={i}>
                    <div className='card mb-4 shadow-sm'>
                        <img src={book.imageUrl} className="card-img-top" alt="Sample image " />
                        <div className="card-body">
                            <h5 className="card-title">{book.name}</h5>
                            <p className="card-text"> {book.overview}</p>
                            

                                <h2><span className="badge bg-info">{movie.author}</span></h2>
                            </div>
                        </div>
                    
                </div>
            
            ))}
        </div>
    
             )
             
    
    }
}

export default Books;