import React from'react';
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
            <div className='card' style={{width:"80%", height:"60%"}}>
                        <img src={this.state.imageURL} className="card-img-top" alt="sample image" />
                        <div className="card-body">
                            <h5 className="card-title">{this.state.name}</h5>
                            <p className="card-text"> {this.state.overview}</p>

                            <div className="d-flex justify-content-between align-items-center">
                            <span className="badge rounded-pill bg-secondary">{this.state.author}</span>
        )
    }
}
export default ShowBook;