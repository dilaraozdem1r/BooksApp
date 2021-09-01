import React from 'react'
import User from './User'
import Sidebar from 'react-sidebar';
import Books from './Books';

class App extends React.Component {
    //Sıdebar kodu
    /* <Sidebar
            sidebar={<b>MENU</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white" } }}
          >
            <button onClick={() => this.onSetSidebarOpen(true)}>
              Open sidebar
            </button>
          </Sidebar> */

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
            <div>

         
          <div><Books/></div>
          
          </div>
          

        );
}
}
export default App;