import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getOneWine } from "../../services/wines"
import { Link } from 'react-router-dom'
import StarRatings from "react-star-ratings"


export default function WineDetails(props) {


  const [wineInfo, setWineInfo] = useState(null)
  // const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  // const { ratings } = props
  // console.log(ratings)
  // const [selectedRating, setSelectedRating] = useState('')

  useEffect(() => {
    const fetchOneWine = async () => {
      const wineData = await getOneWine(id)
      setWineInfo(wineData)
      // setLoaded(true)
      console.log(wineData)
    }
    fetchOneWine()
  }, [props.toggle, id])

  if (!wineInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p>{wineInfo.name}</p>
      <p>{wineInfo.year}</p>
      <p>{`$${wineInfo.price}.00`}</p>
      <p>{wineInfo.description}</p>
      {wineInfo.ratings.map((rating) => (
        <div>
                 <StarRatings
                 rating={Number(rating.rank)}
                 starDimension="40px"
                 starSpacing="15px"
          />
          <button>
              <Link to={`/ratings/${rating.id}/edit`}>Edit Rating</Link>
          </button>
          <button onClick={() =>props.handleRatingDelete(rating.id)}>
            Delete
          </button>
          </div>
         ))}
        {/* <button>
          <Link to={`/ratings/${id}/new`}>Add a Rating</Link>
      </button> */}
      <img src={wineInfo.img} />
    </div>
  )
}
