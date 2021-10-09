import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import './Wines.css'


function Wines(props) {
 
  return (
    <>
    <h1>Our Collection</h1>
    <div className='card-container'>
     
     
      { 
        props.wines.map(wine => (
          <div className="wine-card">
            <img className='wine-img' src={wine.img} alt='Wine Bottle' />
            <p>{wine.name}</p>
            <p>{wine.year}</p>
            {wine.ratings.map((rating) => (
                 <StarRatings
                 rating={Number(rating.rank)}
                 starDimension="40px"
                 starSpacing="15px"
               />
            ))}
            <button><Link to= {`wine-details/${wine.id}/new`}>Add a </Link></button>
            <button><Link to= {`wine-details/${wine.id}`}>Details</Link></button>
          </div>
        ))
        }
      </div>
      </>
   
  )
}

export default Wines
