import React from 'react';
import  serialize from 'form-serialize';
class AddBook extends React.Component{

    handleFormSubmit=(e) =>{
        e.preventDefault();
        const newBook=serialize(e.target,{hash:true})
        this.props.onAddBook(newBook);
    }
    state={
        control=true
    }

    check=()=>{
        if(this.name && this.author && this.overview) this.setState({});
        return true
        
    }

    render(){
        return(
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Book.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name" onChange={this.check()}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Author</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="author"  onChange={this.check()}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL" onChange={this.check()}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5" onChange={this.check()}></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Book" disabled={this.check()}/>
            </form>
        </div>
        )
    }
}
export default AddBook;