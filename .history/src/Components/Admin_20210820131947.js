import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Admin extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" className="col-xs-4" placeholder="Username" aria-label="First name"/>
                            
                        </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" aria-label="Last name"/>
                            </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                </div>
                                    <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </Switch>
        </Router>

                        )
    }

}
export default Admin;
                       