import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Admin extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                <section class="h-100">
  <header class="container h-100">
    <div class="d-flex align-items-center justify-content-center h-100">
                    <form>
                    <div class="col-md-4">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="First name"/>
                            
                        </div>
                        <div class="col-md-4">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" aria-label="Last name"/>
                            </div>
                            
                               <div><button type="submit" className="btn btn-primary">Login</button></div>
                                    
                    </form>
                    </div>
                    </header>
                    </section>
                </Switch>
        </Router>

                        )
    }

}
export default Admin;
                       