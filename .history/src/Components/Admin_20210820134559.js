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
    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-o86obF-UTdLqsqqiUM6O82URx7R52fXlw&usqp=CAU" alt="" width="100" height="100" class="d-inline-block align-text-top"/>
                </div>
                <div className="col">
                    <form>
                    <div class="p-3 mb-2 bg-primary text-white">
                    <div class="col-md-100">
                            <label for="exampleInputEmail1" class="form-label">Username</label>
                            <input type="text" className="form-control" placeholder="Username" aria-label="First name"/>
                            
                        </div>
                        <div class="col-md-50">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Password" aria-label="Last name"/>
                            </div>
                            </div>

                           <div ><button type="submit" className="badge rounded-pill bg-secondary" width="">Login</button></div>      
                    </form>
                    </div>
                    
                                
                    </div>
                    </header>
                    </section>
                    
                </Switch>
        </Router>
        

                        )
    }

}
export default Admin;
                       