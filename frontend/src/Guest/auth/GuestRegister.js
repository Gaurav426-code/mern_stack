import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { Url } from '../../sharescomponents/Urlpage';


function Guest_register() {
        const usecustomnav = useNavigate();

    const [sv, sf] = useState({
        fullname: "",
        email: "",
        dob: "",
        mobile: "",
        gender: "",
        course: "",
        pic: "",
        payment: "",
        address: "",
        role:""
    });

    const chaininput = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        sf((uu) => ({
            ...uu,
            [name]: value
        }))
    }


    const submitform = async () => {
        if (sv.fullname === "") {
            toast.error("please fill fullname",{autoClose: 2000,theme: "dark"});
        }
        else {
            const { fullname, email, dob, mobile, gender, course, pic, payment, address,role } = sv
            const res = await fetch(`${Url}/createdata`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullname, email, dob, mobile, gender, course, pic, payment, address,role
                })
            })
            const data = await res.json();
            console.log(data);
            toast.success("successfully Registor Details",{autoClose: 2000,theme: "dark"});
           setTimeout(()=>{
            usecustomnav('/userlogin');
           },2000)
           

        }

    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-8 shadow bg-dark'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-12'>
                                <h4 className='text-center text-white'>Add New Guest</h4>
                                <ToastContainer></ToastContainer>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Full Name</label>
                                    <input type="text" className="form-control" name='fullname' value={sv.fullname} onInput={chaininput} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Email address</label>
                                    <input type="email" className="form-control" name='email' value={sv.email} onInput={chaininput} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label text-white">DOB</label>
                                    <input type="date" className="form-control" name='dob' value={sv.dob} onChange={chaininput} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Mobile No</label>
                                    <input type="text" className="form-control" name='mobile' value={sv.mobile} onInput={chaininput} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Gender</label>
                                    <select className='form-select' name='gender' value={sv.gender} onChange={chaininput}>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Course</label>
                                    <select className='form-select' name='course' value={sv.course} onChange={chaininput}>
                                        <option>mern</option>
                                        <option>mean</option>
                                        <option>excel</option>
                                        <option>html</option>
                                        <option>css</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="mb-3">
                                    <label className="form-label twxt-white">Profile Pic</label>
                                    <input type="text" placeholder="paste url pic path" className="form-control" name='pic' value={sv.pic} onInput={chaininput} />
                                </div>
                            </div>

                            <div className='col-md-4'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Payment Methods</label>
                                    <select className='form-select' name='payment' value={sv.payment} onChange={chaininput}>
                                        <option>UPI</option>
                                        <option>Credit card</option>
                                        <option>Debit Card</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Role</label>
                                    <select className='form-select' name='role' value={sv.role} onChange={chaininput}>
                                        <option>User</option>
                                        <option>Admin</option>
                                        <option>Guest</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-md-12'>
                                <div className="mb-3">
                                    <label className="form-label text-white">Address </label>
                                    <textarea className="form-control" placeholder="Leave a comment here" name='address' value={sv.address} onInput={chaininput}></textarea>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div className="mb-3">
                                    <button className='btn btn-success bg-primary' type="button" onClick={submitform}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guest_register