import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
     
      render() {
        return (
          <Sidebar
            sidebar={<b>Sidebar content</b>}
            
            styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          </Sidebar>
        );
}
export default App;