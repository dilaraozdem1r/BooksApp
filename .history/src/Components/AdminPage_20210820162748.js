import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch } from 'react-router-dom';

class AdminPage extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                <div>Hello</div>
                </Switch>
            </Router>
            
        )
    }
}
export default AdminPage;