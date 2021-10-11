import './Layout.css'
import Footer from './Footer/Footer.jsx'
import { Link } from 'react-router-dom'
import Nav from "../Nav"


function Layouts(props) {

  return (
    <div>
      {/* <Nav user={props.user}/>  */}
      <div className="nav">
        <img className="nav-logo" src="https://lh3.googleusercontent.com/pxh0Tw16-XwE7RbbDtyXRMUa00FvbjxVrv2LGRMqHxg00xXIQz-rRJiUzviBiiBCRcUljvWHJY9xv0WoYLQPE611QSfNRKx7SDQiAcCfWO2357K6hGwmXWpboNT8eNL6YUuzR9SF=s200-p-k"
          alt="logo"
        />
        <header className="nav-bar">
          <div className='nav-item'>
            <Link to='/wines'>Our Collection</Link>
            {
              props.currentUser ?
                (<>
                  <article>Welcome {props.currentUser.username}!</article>
                  <button onClick={props.handleLogout}>Sign Out</button>
                </>) : (<>
                  <Link to='/logIn'>LogIn</Link>
                  <Link to='/register'>Register</Link>
                </>)

            }
            {
              props.currentUser && <>
                <Link to='/wines'>Our Collection</Link>
              </>
            }
          </div>
        </header>
      </div>
      {props.children}
      <Footer />
    </div>

  )
}

export default Layouts
