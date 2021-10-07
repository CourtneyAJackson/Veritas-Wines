import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { getOneWine } from "../services/wines"


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
      <h2>This is the wine detail page</h2>
      <p>{ wineInfo.name}</p>
    </div>
  )
}
