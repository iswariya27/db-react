import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ViewAuthor(props) {
  const res = useParams()
  const [userData, setUserData] = useState()

  let getdatas = async () => {
    let empolee = await axios.get(`https://api.fake-rest.refine.dev/images/${res.id}`);
    setUserData(empolee.data)
  };

  useEffect(() => {
    getdatas(); 
  }, []);

  return (
    <div className='lists'>
      {
        userData ?
          <ul>
            <li>{userData?.id}</li>
            <li>{userData?.authorname}</li>
            <li>{userData?.birthdate}</li>
            <li>{userData?.biography}</li>
          </ul> :
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }
      <div className='col-lg-8 mt-6 mt-2 mb-3'>
        <button type='button' className='btn btn-success btn-sm' ><Link className="nav-link" to="/authors">Back Home</Link></button>
      </div>
    </div>
  );
}

export default ViewAuthor;    