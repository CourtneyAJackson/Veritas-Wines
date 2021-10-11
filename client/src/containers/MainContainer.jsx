import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { getAllRatings, postRating, putRating, updatedRating, deleteRating } from '../services/ratings.js'
import { getAllWines } from '../services/wines.js'
import Wines from '../screens/Wines/Wines.jsx'
import WineDetails from '../screens/WineDetail/WineDetails.jsx'
import RatingCreate from '../screens/RatingCreate/RatingCreate.jsx'
import RatingEdit from '../screens/RatingEdit/RatingEdit.jsx'
import Home from '../screens/Home/Home.jsx'




function MainContainer() {

  const [toggle, setToggle] = useState(false)
  const [wines, setWines] = useState([])
  const history = useHistory()

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
  }, [toggle])

  // const handleRatingCreate = async (ratingData) => {
  //   const newRating = await postRating(ratingData);
  //   setRatings((prevState) => [...prevState, newRating]);
  //   // history.push('/wines');
  // };
  const handleRatingEdit = async (ratingData, id, wiID) => {
    await putRating(ratingData, id);
    setToggle(prev => !prev)
    history.push(`/wine-details/${wiID}`);
  };

  const handRatingDelete = async (id) => {
    await deleteRating(id);
    setToggle((prev) => !prev);
  };


  return (
    <Switch>
      <Route path='/wine-details/:id'>
        <WineDetails toggle={toggle} handleRatingDelete={handRatingDelete} />
      </Route>
      <Route path='/wines'>
        <Wines wines={wines} />
      </Route>
      <Route path='/ratings/:id/new'>
        <RatingCreate />
      </Route>
      <Route path='/ratings/:id/edit'>
        <RatingEdit handleRatingEdit={handleRatingEdit} />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
    </Switch>
  )
}
// handleRatingCreate={handleRatingCreate}
export default MainContainer
