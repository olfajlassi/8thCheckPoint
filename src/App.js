import React, {Component} from 'react';
import Carre from './components/multi'

const centerscreen = {
  backgroundColor: '#cbc5c4',
  display: 'flex',
  justifyContent: 'center',    /*zoom*/
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '100vh'
}

class App extends Component {
  
  render() {
    return (
        <div style={centerscreen} > 
            <Carre/>
        </div>
      );  }
}

export default App;
