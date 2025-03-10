import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Url } from '../../sharescomponents/Urlpage';



function Admin_dashboard() {
    const [user, setuser] = useState([]);

    const getalldata = () => {
        axios.get(`${Url}/alldata`).then((d) => {
            console.log(d.data);
            setuser(d.data);
        });


    }

    useEffect(() => {
        getalldata();
    }, [])


const deleteuser= (id)=>
{
    axios.delete(`${Url}/deleteuser/${id}`).then((d) => {
        console.log(d);
        getalldata();
    })

}



    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 text-center '>
                    <h3 className='text-white'>Admin page  </h3>
                </div>
            </div>
                <div className='col-md-10 border bg-dark '>
                    <table className="table table-bordered border-primary ">
                        <thead>
                            <tr>
                                <th scope="col">Sno</th>
                                <th scope="col">FullName</th>
                                <th scope="col">Course</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Mobile No</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Profile Pic</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((d,a) => {
                                return (
                                    <tr key={++a}>
                                        <th scope="row">{++a}</th>
                                        <td>{d.fullname}</td>
                                        <td>{d.course}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.mobile}</td>
                                        <td>{d.email}</td>
                                        <td>{d.dob}</td>
                                        <td> <img src={d.pic} alt={a} width={30} height={30}/></td>
                                        <td>{d.address}</td>
                                        <td>
                                            <button className='btn btn-sm btn-danger' onClick={()=>deleteuser(d._id)}>Del</button>
                                            <button className='btn btn-sm btn-info'>View</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        
    )
}

export default Admin_dashboard