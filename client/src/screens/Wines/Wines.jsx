import './Wines.css'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'



function Wines(props) {

  return (
    <div className= 'wine-collection'>
      <h1>Our Collection</h1>
      <div className='card-container'>


        {
          props.wines.map(wine => (
            <div className="wine-card">
              <img className='wine-img' src={wine.img} alt='Wine Bottle' />
              <div className='name-year-title'>
                <p>{wine.name}</p>
                <p>{wine.year}</p>
              </div>
              {wine.ratings.map((rating) => (
                <StarRatings
                  rating={Number(rating.rank)}
                  starDimension="40px"
                  starSpacing="15px"
                />
              ))}
              <div className='detail-rating-buttons'>
                <button className='add-rating-collection-button'><Link to={`wine-details/${wine.id}/new`}>Add a </Link></button>
               
                <button className='detail-collection-button'><Link to={`wine-details/${wine.id}`}>Details</Link></button>
               </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default Wines
