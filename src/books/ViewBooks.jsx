import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ViewBooks(props) {
  const res = useParams()
  const [userData, setUserData] = useState()

  let getdatas = async () => {
    let empolee = await axios.get(`https://655f0381879575426b445b47.mockapi.io/books/${res.id}`);
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
            <li>{userData?.title}</li>
            <li>{userData?.author}</li>
            <li>{userData?.isbn}</li>
            <li>{userData?.publicationDate}</li>
          </ul> :
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }
      <div className='col-lg-8 mt-6 mt-2 mb-3'>
        <button type='button' className='btn btn-success btn-sm' ><Link className="nav-link" to="/books">Back Home</Link></button>
      </div>
    </div>
  );
}

export default ViewBooks;    