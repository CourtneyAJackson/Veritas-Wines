import { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import { getAllRatings, postRating, putRating, updatedRating, deleteRating } from '../services/ratings.js'
import { getAllWines } from '../services/wines.js'
import Wines from '../screens/Wines.jsx'
import WineDetails from '../screens/WineDetails.jsx'
import RatingCreate from '../screens/RatingCreate.jsx'
import RatingEdit from '../screens/RatingEdit.jsx'




function MainContainer() {

  // const [ratings, setRatings] = useState([])
  const [wines, setWines] = useState([])
  // const history = useHistory()

  // useEffect(() => {
  //   const getRatings = async () => {
  //     const ratingsList = await getAllRatings()
  //     setRatings(ratingsList)
     
  //   }
  //   getRatings()
  // }, [])
  
  useEffect(() => {
    const getWines = async () => {
      const winesList = await getAllWines()
      setWines(winesList)
    //  console.log(winesList)
    }
    getWines()
  }, [])
  
  // const handleRatingCreate = async (ratingData) => {
  //   const newRating = await postRating(ratingData);
  //   setRatings((prevState) => [...prevState, newRating]);
  //   // history.push('/wines');
  // };
  // const handleRatingEdit = async (id, ratingData) => {
  //   const updatedRating = await putRating(id, ratingData);
  //   setRatings((prevState) =>
  //     prevState.map((rating) => {
  //       return rating.id === Number(id) ? updatedRating : rating;
  //     })
  //   );
  //   history.push('/wines');
  // };


  return (
    <Switch>
      <Route exact path='/wines'>
        <Wines wines={wines}/>
      </Route>
      <Route path='/wine-details/:id'>
        <WineDetails />
      </Route>
      <Route path='/ratings/:id/new'>
        <RatingCreate  />
      </Route>
      <Route path='/ratings/:id/edit'>
        {/* <RatingEdit ratings={ratings} handeRatingEdit={handleRatingEdit} /> */}
      </Route>
    </Switch>
  )
}
// handleRatingCreate={handleRatingCreate}
export default MainContainer
