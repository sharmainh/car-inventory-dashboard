import React from 'react'
import enyaqIV from '../images/enyaqIV.png'
import volvoEX30 from '../images/volvoEX30.png'


function Inventory() {
  return (
    <>
      <div className='row' >
        <div className='column enyaq'>
          <img alt='' src={enyaqIV} className='enyaqIV'></img>
        </div>
        <div className='column'>
          <h1 style={{paddingTop: 75, paddingRight: 400, 
          fontSize: 40, fontWeight: 300}}>The Enyaq IV</h1>
          <div className='row' >
            <p style={{fontSize: 14, width: 500, textAlign: 'left'}}>
                The Enyaq iV 80 is equipped with an 82 kWh battery pack that 
                provides a range of up to 420 km on a single charge. 
                The battery can be charged to 80 percent in just 38 minutes 
                using a fast-acting DC charger. The SUV is equipped with an 
                electric motor that provides 150 kW (201 horsepower) and 
                310 Nm of torque. The top speed is 160 km/h (99 mph), and 
                acceleration from 0 to 100 km/h (62 mph) takes 8.6 seconds.
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='column volvo'>
          <h1 style={{paddingTop: 75, paddingRight: 400, 
            fontSize: 40, fontWeight: 300, width: 300}}>The Volvo EX30</h1>
          <div className='row' >
            <p style={{fontSize: 14, width: 500, textAlign: 'left'}}>
             The Volvo EX30 is equipped with an 69 kWh battery pack that provides
             a range of up to 370 km on a single charge. The battery can be 
             charged to 80 percent in just 28 minutes using a fast-acting 
             DC charger. The SUV is equipped with an electric motor that 
             provides 200 kW (272 horsepower) and 343 Nm of torque. 
             The top speed is 180 km/h, and acceleration from 0 to 100 km/h 
             (62 mph) takes 5.3 seconds
            </p>
          </div>
        </div>
        <div className='column'>
          <img alt='' src={volvoEX30} className='volvoEX30'></img>
        </div>
      </div>
    </>
  );
}

export default Inventory