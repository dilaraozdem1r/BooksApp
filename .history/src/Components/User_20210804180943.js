import React from 'react';

class User extends React.Component{
    render(){
        return(
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="---Admin Login---" disabled/>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label htmlFor="inputName">UserName</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                               />
                    </div>
                    <div className="form-group col-md-5">
                        <label htmlFor="inputRating">Password</label>
                        <input 
                                type="password" 
                                className="form-control" 
                                name="Password"
                               />
                    </div>
            
            </div>
            </form>
            </div>
        
        )}
    
}
export default User;