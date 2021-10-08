import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

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
            {wine.ratings.map((rating) => (
                 <StarRatings
                 rating={Number(rating.rank)}
                 starDimension="40px"
                 starSpacing="15px"
               />
            ))}
            <button><Link to= {`wine-details/${wine.id}`}>Details</Link></button>
          </>
        ))
      }
    </div>
  )
}

export default Wines
