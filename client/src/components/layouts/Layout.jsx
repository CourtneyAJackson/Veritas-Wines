import './Layout.css'
import Footer from './Footer/Footer.jsx'
import { Link } from 'react-router-dom'


function Layouts(props) {
 
  return (
    <div>
      {/* <Nav user={props.user}/>  */}
       <header className="nav-bar">
        <div className='nav-item'>
        <h1>Veritas</h1>
        <Link to='/wines'>Our Collection</Link>
        {
          props.currentUser ?
            (<>
              <article>Welcome {props.currentUser.username}!</article>
              <button onClick={props.handleLogout}>Sign Out</button>
            </>) : (<>
              <Link to='/logIn'>LogIn</Link>
              <Link to ='/register'>Register</Link>
            </>)

        }
        {
          props.currentUser && <>
          <Link to='/wines'>Our Collection</Link>
          </>
        }
        </div>
      </header>
      {props.children}
      <Footer />
      </div>
   
  )
}

export default Layouts
