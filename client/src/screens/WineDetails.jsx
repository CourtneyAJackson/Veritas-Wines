import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { getOneWine } from "../services/wines"
import {Link} from 'react-router-dom'


export default function WineDetails(props) {


  const [wineInfo, setWineInfo] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const { ratings } = props
  // console.log(ratings)
  // const [selectedRating, setSelectedRating] = useState('')
  
  useEffect(() => {
    const fetchOneWine = async () => {
      const wineData = await getOneWine(id)
      setWineInfo(wineData)
      setLoaded(true)
      console.log(wineData)
    }
    fetchOneWine()
  }, [id])
  
  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <p>{wineInfo.name}</p>
      <p>{wineInfo.year}</p>
      <p>{`$${wineInfo.price}.00`}</p>
      <p>{wineInfo.description}</p>
      <Link to={`/ratings/${wineInfo.id}/new`}>Add a Rating</Link>
      <Link to={`/ratings/${wineInfo.id}/edit`}>Edit Rating</Link>
      <img src={wineInfo.img} />
      
    </div>
  )
}
