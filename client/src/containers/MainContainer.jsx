import { useState, useEffect } from 'react'
import {Switch, Route} from 'react-router-dom'
import { getAllRatings } from '../services/ratings.js'
import { getAllWines } from '../services/wines.js'
import Wines from '../screens/Wines.jsx'
import WineDetails from '../screens/WineDetails.jsx'


function MainContainer() {

  const [ratings, setRatings] = useState([])
  const [wines, setWines] = useState([])

  useEffect(() => {
    const getRatings = async () => {
      const ratingsList = await getAllRatings()
      setRatings(ratingsList)
     
    }
    getRatings()
  }, [])
  
  useEffect(() => {
    const getWines = async () => {
      const winesList = await getAllWines()
      setWines(winesList)
    //  console.log(winesList)
    }
    getWines()
  },[])


  return (
    <Switch>
      <Route path='/wines'>
        <Wines wines={wines} ratings={ratings}/>
      </Route>
      <Route path='/wineDetails/:id'>
        <WineDetails ratings={ratings} />
      </Route>
    </Switch>
  )
}

export default MainContainer
