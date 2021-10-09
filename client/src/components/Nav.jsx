// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Nav(props) {
//   return (
//     <div>
//       <header>
//         <h1>Veritas Wines</h1>
//         <Link to='/wines'>Our Collection</Link>
//         {
//           props.currentUser ?
//             (<>
//               <article>Welcome {props.currentUser.username}!</article>
//               <button onClick={props.handleLogout}>Sign Out</button>
//             </>) : (<>
//               <Link to='/logIn'>LogIn</Link>
//               <Link to ='/register'>Register</Link>
//             </>)

//         }
//         {
//           props.currentUser && <>
//           <Link to='/wines'>Our Collection</Link>
//           </>
//         }
//       </header>
//     </div>
//   )
// }
