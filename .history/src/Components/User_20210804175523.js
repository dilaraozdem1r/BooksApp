import React from 'react';
class User extends React.Component{
    render(){
        return(
        <div>
            <div className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">@</span>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
            <span class="input-group-text" id="basic-addon2">@example.com</span>
          </div>
        </div>
        )}
    
}