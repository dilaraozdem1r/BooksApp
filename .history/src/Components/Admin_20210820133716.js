import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Admin extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                <section class="h-100">
                

  <header class="container h-100">

  <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-o86obF-UTdLqsqqiUM6O82URx7R52fXlw&usqp=CAU" alt="" width="100" height="100" class="d-inline-block align-text-top"/>
                </div>

    <div class="d-flex align-items-center justify-content-center h-100">
    
                    <form>
                    <div class="col-md-10">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="First name"/>
                            
                        </div>
                        <div class="col-md-10">
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
                       