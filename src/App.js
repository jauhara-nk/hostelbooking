
import './App.css';
import {BsWifi} from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // You can import any icons you need
import { IconBase } from 'react-icons/lib/esm';
{/*import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

ReactDOM.render(element, document.body)*/}



function App() {
  return (
    <div className="App">
      <h2>Douglas Villa</h2>

<table className="table-design">
    <tbody>
      <tr>
        <td rowSpan={2} colspan={2}>
          <img src="bathroom.jpg" className="bed-image" />
        </td>
        <td>
          <img src="bathroom.jpg" className="image" />
        </td>
      </tr>
      <tr>
        <td>
          <img src="bathroom.jpg" className="image" />
        </td>
      </tr>
    </tbody>
  </table>
  <h4 className="heading-style">Overview</h4>
  <ul className="list-design">
    <li>2 beds</li>
    <li>1 private bath</li>
  </ul>
<br></br>
  <p>
    Experience the best of [City/Location] at [Hostel Name]. 
    Our central location provides easy access to [Landmarks, Attractions], while our budget-friendly accommodations ensure you get the most out of your travel budget. 
    Choose from a range of room options, from cozy private spaces to sociable dormitories.
     Join our vibrant community of fellow travelers, share stories, and make lifelong friendships in our welcoming common areas.
      With a commitment to cleanliness, safety, and sustainability, [Hostel Name] offers a comfortable and eco-conscious stay. 
      Book your adventure today and discover the perfect hub for your unforgettable journey in [City/Location].
      </p>
  <div>
    <br></br>
    <p className="heading-style">
      <b>This place offers</b>
    </p>
    <ul className="column">
      <li>tv</li>
      <li>wifi</li>
      <li><BsWifi />kitchen</li>
      <li>first aid</li>
      <li>transportation</li>
      
    </ul>
    </div>
    <br/>

    <hr></hr>
<br/>

<h5><b>

 Reviews</b></h5>


   </div>
   );
  }
  export IconBase;
  
  export default App;


  


