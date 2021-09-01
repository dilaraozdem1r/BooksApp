import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';

class App extends React.Component {
    render(){
        return (
            <Sidebar sidebar={<b>Sidebar content</b>}/>
            
        )
    }
}
export default App;