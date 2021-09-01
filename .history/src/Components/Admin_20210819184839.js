import React from 'react';

class Admin extends React.Component {

    render() {
        return (
         <Router>
            <Switch>
            <div class="row">
                <div class="col">
                    <input type="text" class="form-control" placeholder="Username" aria-label="First name" />
                </div>
                <div class="col">
                    <input type="password" class="form-control" placeholder="Password" aria-label="Last name" />
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
         </Switch>
        </Router>

        )
    }

}
export default Admin;