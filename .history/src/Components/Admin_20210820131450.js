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
                            <input type="text" class="form-control" placeholder="Username" aria-label="First name"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" placeholder="Password" aria-label="Last name"/>
  </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
                                    <button type="submit" class="btn btn-primary">Login</button>
</form>
         </Switch>
        </Router>

                        )
    }

}
                        export default Admin;
                       