import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Authors(prpos) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getdata() {
            try {
                const Authors = await axios.get("https://api.fake-rest.refine.dev/images")
                setUsers([...Authors.data]);
            } catch (error) {
                console.log(error);
            }
        }
        getdata();
    }, []);
    const handleDelete = async (id) => {
        // console.log(id);
        await axios.delete(`https://api.fake-rest.refine.dev/images/${id}`);
        const newUserData = users.filter((item) => item.id !== id);
        setUsers([...newUserData]);
    }
    return (
        <div className='container'>
            <div className="mdle">
                <h1 className="h4">Author Data</h1>
                <Link to="/addauthor" className="btn btn-primary"> Create User</Link>
            </div>
            <div className="row">
                {
                    users.map((users) => {
                        return <div className="cards">
                            <div className="card-body">
                                <h6 className='headss'>AUTHOR DETAILS</h6>
                                <p className="card-text"><span className='textclr'>Author Name:</span> {users.authorname}</p>
                                <p className="card-text"><span className='textclr'>Born:</span> {users.birthdate}</p>
                                <p className="card-text"><span className='textclr'>Biography:</span> {users.biography}</p>
                                <Link to={`/editauthor/${users.id}`} className='edit btn btn-warning  btn-sm '>Edits</Link>
                                <Link to={`/viewauthor/${users.id}`} className='view btn btn-info  btn-sm '>Views</Link>
                                <button className='del btn btn-danger btn-sm ' onClick={() => handleDelete(users.id)} >Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Authors;

{/* <div className="card">
 <div className="card-header">
 <h6 className="h6">Users Details</h6>
</div>
<div className="card-body">
 <div className="table-responsive">
     <table className="table table-bordered" id="dataTable">
         <thead>
             <tr>
                 <th>Author Name</th>
                 <th>Birth Date</th>
                 <th>Biography</th>
                 <th>Action</th>
             </tr>
         </thead>
         <tbody>
             {
                 users.map((users) => {
                     return <tr>
                         <td>{users.authorname}</td>
                         <td>{users.birthdate}</td>
                         <td>{users.biography}</td>
                         <td> <Link to={`/editauthor/${users.id}`} className='edit btn btn-warning  btn-sm '>Edits</Link>
                             <Link to={`/viewauthor/${users.id}`} className='view btn btn-info  btn-sm '>Views</Link>
                             <button className='del btn btn-danger btn-sm ' onClick={() => handleDelete(users.id)} >Delete</button></td>
                     </tr>
                 })
             }
         </tbody>
     </table>
 </div>
</div>
</div> */}
