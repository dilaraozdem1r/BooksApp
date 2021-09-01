import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Admin extends React.Component {

    render() {
        return (
         
            <Router>
                <Switch>
                <div className="container h-100">
                <div class="bg-light">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-o86obF-UTdLqsqqiUM6O82URx7R52fXlw&usqp=CAU" alt="" width="50" height="40" class="d-inline-block align-text-top"/>
                
                </div>
                


                <form>
  <div class="mb-3">
    <label for="inputlg" class="form-label">USERNAME</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="inputlg" class="form-label">PASSWORD</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-secondary">LOGIN</button>
</form>
</div>
                    
                </Switch>
        </Router>
        

                        )
    }

}
export default Admin;
                       