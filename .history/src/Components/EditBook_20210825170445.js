import React from 'react;'

class EditBook extends React.Component{

    state={
        name,author,imageURL,overview:""
}

    onInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFormSubmit=(e)=>{
        e.preventDefault();
        const id=this.props.match.params.id;
        const updatedBook={name,author,imageURL,overview}
        this.props.onEditMovie(id,updatedBook);
        this.props.history.push("/");

    }


    render(){
        return(<div className="container">
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
        <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled/>
            <div className="form-row">
                <div className="form-group col-md-10">
                    <label htmlFor="inputName">Name</label>
                    <input  type="text" 
                            className="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onInputChange}/>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputRating">Author</label>
                    <input 
                            type="text" 
                            className="form-control" 
                            name="rating"
                            value={this.state.author}
                            onChange={this.onInputChange}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="inputImage">Image URL</label>
                    <input 
                            type="text" 
                            className="form-control" 
                            name="imageURL"
                            value={this.state.imageURL}
                            onChange={this.onInputChange}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label htmlFor="overviewTextarea">Overview</label>
                    <textarea 
                            className="form-control" 
                            name="overview" rows="5" value={this.state.overview}onChange={this.onInputChange}></textarea>
                </div>
            </div>
            <input type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
        </form>
    </div>)
    }
}
export default EditBook;