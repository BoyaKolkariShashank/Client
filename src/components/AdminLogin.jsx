import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Admin.css';

const AdminLogin =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const history=useHistory();
    
    const getAccess=()=>{
        if(email==="Shashank@gmail.com" && password==="admin"){
            window.alert("Login Successful");
            history.push("/aAbBcC");
        }
        else if(email==="admin.cse@gmail.com" && password==="admin"){
           window.alert("Login Successful");
            history.push("/education"); 
        }
        else if(email==="admin.aids@gmail.com" && password==="admin"){
            window.alert("Login Successful");
             history.push("/health"); 
         }
         else if(email==="admin.csit@gmail.com" && password==="admin"){
            window.alert("Login Successful");
             history.push("/service"); 
         }
        else{
            window.alert("You don't have this access");
        }
    }
    return(
        <>
        <h1 className="text-center my-1">Admin Login</h1>
        <hr />

        <form method="GET">
        <div className="form-group text-center jumbotron mx-5">
        
        <div >
                <label htmlFor="email">
                Email ID:
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email ID here" className='mx-2'></input>
              </div>
              
              <br />
              <div className="form-group">
                <label htmlFor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password" className='mx-1'></input>
              </div>
<br />
             <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit btn btn-outline-primary"
                onClick={getAccess} value="Log In"/>
              </div>
              </div>
        </form>
        
        </>
    )
} 

export default AdminLogin;