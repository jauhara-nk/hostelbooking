import {PiForkKnifeFill} from 'react-icons/pi';
import {HiWifi} from 'react-icons/hi';
import {PiTelevisionFill} from 'react-icons/pi';
import {FaBus} from 'react-icons/fa';
import {PiFirstAidLight} from 'react-icons/pi';
import {CiHome} from 'react-icons/ci';


export default function Hostelpage(){


return(

<div className="App">
      <h2>Douglas Villa</h2>

<table className="table-design">
    <tbody>
      <tr>
  <td rowSpan={2}>
          <img src="hostelbed.jpg" className="bed-image" />
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
    <li><CiHome/>2 beds</li>
    <li>1 private bath</li>
  </ul>
<br></br>
  <p>
    Experience the best of [City/Location] at [Hostel Name]. 
    Our central location provides easy access to [Landmarks, Attractions], while our budget-friendly accommodations ensure you get the most out of your travel budget. 
    Choose from a range of room options, from cozy private spaces to sociable dormitories.Join our vibrant community of fellow travelers, share stories, and make lifelong friendships in our welcoming common areas.
    With a commitment to cleanliness, safety, and sustainability, [Hostel Name] offers a comfortable and eco-conscious stay. 
    Book your adventure today and discover the perfect hub for your unforgettable journey in [City/Location].
      </p>
  <div>
    <br></br>
    <p className="heading-style">
      <b>This place offers</b>
    </p>
    <ul className="list-design">
      <li> <PiTelevisionFill/>tv</li>
      <li> <HiWifi /> WiFi</li>
      <li> <PiForkKnifeFill />kitchen</li>
      <li><PiFirstAidLight />first aid</li>
      <li><FaBus />transportation</li>
      
    </ul>

    <button type= "button" >show all amenities</button>
    </div>
    <br/>

    <hr></hr>
<br/>

<h5><b>

 Reviews</b></h5>


   </div>
   );
}