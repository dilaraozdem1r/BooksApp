import React from 'react';

class User extends React.Component{
    render(){
        return(
            <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
            </div>
          </div>
        
        )}
    
}
export default User;