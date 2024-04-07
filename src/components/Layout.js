import { Link } from 'react-router-dom';


function NavLink(props) {
  return(
    <div className='column'>
      <Link to={`/${props.location}`}>{props.location}</Link>
    </div>
  )
}


function Layout() {
  return (
    <nav style = {{backgroundColor: ' rgb(1, 1, 42)'}} className="navbar">
        <div className='row'>
          <div className='column logo'>
            <div className='row'>
              <div className='column logo'>
                Wyatts EV Wheels
              </div>
            </div>
          </div>
          <div className='column' style = {{paddingLeft: 500}}>
            <div className='row' style ={{paddingTop: 20}}>
              <NavLink location="Home"/>
              <NavLink location="Inventory"/>
              <NavLink location="SignIn"/>
              <NavLink location="SignUp"/>
             
              
            </div> 
          </div>
        </div>
    </nav>
        );
      }

export default Layout