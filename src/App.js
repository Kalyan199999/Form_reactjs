
import './App.css';

import {useState , useEffect} from 'react';

function App() {

  const initialValues = {username:"" , email:"",password:""};

  const [formValues , updateForm] = useState(initialValues);
  const [errors , setErrors] = useState({});
  const [isSubmit , setSubmit] = useState(false);

  
  useEffect(()=>{
    if(Object.keys(errors).length === 0 && isSubmit)
    {
      console.log(formValues);
    }
  } , [errors]);

  function handleChange(e){
    e.preventDefault();
    const {name , value} = e.target;
    updateForm({...formValues , [name]:value});
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    validte(formValues);
    updateForm(initialValues);
    setSubmit(true);
    
  }


  const validte = (values)=>{

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const err = {};
    if(!values.username)
    {
      err.username = "Userame is required!"
    }

    if(!values.email)
    {
      err.email = "Email is required!"
    }
    else if(!regex.test(values.email))
    {
      err.password = "This is not a valid Format"
    }

    if(!values.password)
    {
      err.password = "Password is required!"
    }
    else if(values.password.length < 8)
    {
      err.password = "Password length sholud be atleast 8!"
    }

    setErrors(err);

  }

  return (
    <div className='container'>

          {
          (Object.keys(errors).length === 0 && isSubmit) ? <div className='signin'>Signed in successfull</div>:""}
          <pre> {JSON.stringify(formValues)}</pre>

          <form action='' onSubmit={handleSubmit}>

            <h1>Login Form</h1>

            <div className='seperator'></div>

            <div className='form'>

              <div className='field'>
                <label >Username</label>
                <input type='text' name='username' placeholder='Username' value={formValues.username} 
                  onChange={(e)=>{handleChange(e)}}
                />
                <span>{errors.username}</span>
              </div>

              <div className='field'>
                <label >Email</label>
                <input type='email' name='email' placeholder='Email' value={formValues.email} 
                onChange={(e)=>{handleChange(e)}}
                />
                <span>{errors.email}</span>
              </div>

              <div className='field'>
                <label >Password</label>
                <input type='password' name='password' placeholder='Password' value={formValues.password} 
                onChange={(e)=>{handleChange(e)}}
                />
                <span>{errors.password}</span>
              </div>

              <button className='btn' >Submit</button>

            </div>

          </form>
          </div>

  );
}

export default App;
