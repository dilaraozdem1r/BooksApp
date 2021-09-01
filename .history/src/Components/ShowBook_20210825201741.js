import React from'react';
import axios from 'axios';
class ShowBook extends React.Component{

    state={
        name:"",
        author:"",
        imageURL:"",
        overview:""
    }

    async componentDidMount(){
        const id=this.props.match.params.id;
        const response=await axios.get(`http://localhost:3004/books/${id}`)
        const book=response.data;
        this.setState({
            name:book.name,
            author:book.author,
            imageURL:book.imageURL,
            overview:book.overview
        })
    
    }

    render(){
        return(
            <div className="container">
                <div class="row justify-content-center align-items-center">
                <div class="row mb-4">
                <div class="col-md-4 p-2 grey">
                    <img src={this.state.imageURL} className="img-rounded" max-width= "479px" alt="sample image" />
                    
                </div>
                    <div className="col">
                    
                    <h5>{this.state.name}</h5>
                    <p className="card-text"> {this.state.overview}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="badge rounded-pill bg-secondary">{this.state.author}</span>
                    </div>
                    </div>
                    </div>
            </div>
            </div>
                
               
        
            
        )
    }
}
export default ShowBook;