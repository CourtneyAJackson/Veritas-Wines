import {Link} from 'react-router-dom'

function Layouts(props) {
  return (
    <div>
      <header>
      <h1>Veritas Wines</h1>
      </header>
      <Link to ='/wines'>Explore Our Collection</Link>
      {props.children}
    </div>
  )
}

export default Layouts
