import {Link} from 'react-router-dom'

function Wines(props) {
 
  return (
    <div>
      <h1>Our Collection</h1>
      { 
        props.wines.map(wine => (
          <>
            <img src={wine.img} alt='Wine Bottle' />
            <p>{wine.name}</p>
            <p>{wine.year}</p>
            <p>{wine.ratings.rank}</p>
            <button><Link to= {`wineDetails/${wine.id}`}>Details</Link></button>
          </>
        ))
      }
    </div>
  )
}

export default Wines
