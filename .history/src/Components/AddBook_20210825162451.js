import React from 'react';
import  serialize from 'form-serialize';
class AddBook extends React.Component{

    handleFormSubmit=(e) =>{
        e.preventDefault();
        const newBook=serialize(e.target,{hash:true})
        this.props.onAddBook(newBook);
    }

    check=(n,a,o)=>{
        if(n !==null && a!==null && o!==null ) return false;
        return true;

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
                                name="name"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Author</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="author"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Book" disabled={this.check(this.name,this.author,this.overview)}/>
            </form>
        </div>
        )
    }
}
export default AddBook;