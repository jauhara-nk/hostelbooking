
import './App.css';

import { useState } from 'react'
import './App.css'
 import Header from './header'
 import Sidebar from './sidebar'
 import Home from './home'
// import Hostelpage from './hostel.js';

{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // You can import any icons you need
import { IconBase } from 'react-icons/lib/esm';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)*/}



function App() {
  return (
    <div className="App">
      {/* <Hostelpage /> */}
      {/* <Home /> */}
      <Header />
      <Sidebar />
    
    
    
    </div>
    
      );
  }
 {/*} function Admin(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )

  }
*/}
  
  export default App;


  


