import React from 'react'
import ev1 from '../images/EV1.jpg'


function SignUp() {
  return (
    <div className='container'>
      <div className='column ev1'>
        <img className='ev1' src={ev1} alt='' width={275} height={200}/>
      </div>
      <div className='column signup'>
        <h1 style={{color: 'white', textAlign: 'center', 
        lineHeight: 3, paddingTop: 80}}>Sign Up</h1>
        <form>
          <label style={{paddingRight: 160}}>
            Email
          </label><br/>
          <input type='text' id='email' name='email' 
            placeholder='Enter email here'></input><br/>
          <div className='pass'>
            <label style={{marginLeft: 25, paddingRight: 160}}>
            Password
            </label><br/>
            <input type='text' id='pass' name='password' 
            placeholder='Enter password here'></input>
          </div>
          <div className="row submit">
            <input type='submit' id='submit' name='password'  ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp