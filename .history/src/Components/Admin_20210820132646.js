import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Admin extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                <div className="h-100">
  <div class="row h-500 justify-content-center align-items-center">
                    <form>
                    <div class="col-md-4">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="First name"/>
                            
                        </div>
                        <div class="col-md-4">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" aria-label="Last name"/>
                            </div>
                            
                               
                                    <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    </div>
                    </div>
                </Switch>
        </Router>

                        )
    }

}
export default Admin;
                       