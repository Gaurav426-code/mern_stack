import React ,{ useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from '../../sharescomponents/Urlpage';
import "./Guest.css";

function Guest_login() {
    const mycustomnav = useNavigate();
    const [loginv,setlogin]=useState({
        email:"",
        pass:"",
    });

    const chaininput = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setlogin((uu) => ({
            ...uu,
            [name]: value
        }))
    }

const mylogin= async()=>
{
    
    const {email,pass}=loginv;
    if(loginv.email==="" || loginv.pass==="")
    {
    alert("please fill the details");
    }
    else
    {
      const datares = await fetch(`${Url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email, pass
        })
    });
    const resdata = await datares.json();
    // console.log(resdata.logindata.role);
    if(resdata.status===620)
    {
        alert("this record not found");
    }

    if(resdata.status===421)
        {
            alert("password don't match");
        }

    if(resdata.status===220 && resdata.logindata.role==="student")
    {
        alert("go to admin login page");
    }

    if(resdata.status===220 && resdata.logindata.role==="admin")
        {
          mycustomnav('dashboard');
        }


    }
    
}

  return (
    <div className="container my-5 bg-gradient">

      <div className='row  border shadow bg-primary '>

        <div className= 'col-6 mb-6 g-2 '>
          <div className="d-flex flex-column ms-4">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
            </div>
             
            <h5 className='text-center' >Please login to your account</h5>
            
        
            
            <input className='mb-4 mx-5 p-2' placeholder='Email address' id='form1' type='email'name="email"value={loginv.email} onInput={chaininput}/>
            <input className='mb-4 mx-5 p-2' placeholder='Password' id='form2' type='password' name="pass" value={loginv.pass} onInput={chaininput}/>                    
                    
                    
            <div className="text-center  pt-1 mb-5 pb-1 ">
         <Link to="/guestdash"><button className='mb-4 w-50 gradient-custom-2 p-2 text-white' onClick={mylogin}>Log In</button></Link>
            <br/>
             <Link to="/forgot"><a className="text-muted " href="#!" >Forgot password?</a></Link>
            </div>
            

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className=" mb-0">Don't have an account?</p>
       <Link to="/guestregister"><button className='mx-2 p-1   border border-danger  text-danger'>Create Account

              </button></Link>
            </div>
          </div>
          </div>
        

        <div className="col md-6 g-0 bg-white">
          <div className="d-flex flex-column  justify-content-center gradient-custom-1 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              
            <img src="https://i.etsystatic.com/16477924/r/il/a500ce/2161223450/il_570xN.2161223450_ik4f.jpg" alt='admin_login_pic' className='img-fluid'style={{background:'cover'}}/>
            </div>

          </div>

        </div>
        </div>
        </div>
  );
}

export default Guest_login;