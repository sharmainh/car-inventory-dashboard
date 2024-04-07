import React from 'react'
import { useNavigate } from 'react-router-dom'
import ev2 from '../images/EV2.jpg'
import ev5 from '../images/EV5.jpg'
import ev6 from '../images/EV6.jpg'
import electric from '../images/Electric.jpg'


function Home() {
  const navigate = useNavigate()
  const navigateToPage = () =>{
   navigate('/Inventory')
  }

  return (
    <div className='container'>
      <div className='explore'>
        <button className='bttn' onClick = {() => navigateToPage()}>Explore</button>
      </div>
      <div className='row evImages ' style={{justifyContent: 'end', padding: 50}}>
      <img className='ev2 evImages' src={ev2} alt='' width={200} height={230} />
      <img className='ev5 evImages' src={ev5} alt='' width={200} height={214}/>
      <div className='row'style={{justifyContent: 'end'}}>
      <img className='ev6 evImages' src={ev6} alt='' width={225} height={275}/>
      <img className='electric evImages' src={electric} alt=''  width={275} height={200}  />
      </div>
      </div>
    </div>
  );
}

export default Home


