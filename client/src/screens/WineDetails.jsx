import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import { getAllWines } from "../services/wines"
import { getAllRatings } from "../services/ratings"

export default function WineDetails(props) {

  const {id} = useParams()
  const [wine, setWine] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  useEffect(() => {
    const fetchWine = async () => {
      const wines = await getAllWines()
      setWine(wines)
      setLoaded(true)
      console.log(wines)
    }
    fetchWine()
  }, [])
  console.log(wine.id)
  
  
  if (!isLoaded) {
    return <h2>Loading...</h2>
  }

  // const wineInfo = wine.find(wineObj => wineObj.id === wine.id)
  // console.log(wine.find(wineObj =>))

  return (
    <div>
      <h2>This is the wine detail page</h2>
      <h1>{}</h1>
    </div>
  )
}
