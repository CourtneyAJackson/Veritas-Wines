import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router';
import {postRating } from '../../services/ratings';
import { getOneWine } from '../../services/wines'
import "./RatingCreate.css"
import Button from '@mui/material/Button'
import Box from "@mui/material/Box"


function RatingCreate(props) {

  const [wineItem, setWineItem] = useState(null);
  const [selectedRating, setSelectedRating] = useState('');
  const { id } = useParams();
  let history = useHistory()

  useEffect(() => {
    const fetchWineItem = async () => {
      const wineData = await getOneWine(id);
      setWineItem(wineData);
    };
    fetchWineItem();
  }, [id]);


  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullRating = {
      rank: selectedRating
    }
    const oneWineItem = await postRating(fullRating, id);
    setWineItem(oneWineItem);
    console.log(wineItem)
    history.push(`/wine-details/${wineItem.id}`)
  };


  return (
      <div className="outter-add-container">
    <div className="form-add-container">
      <div className="add-container">
      <form onSubmit={handleSubmit}>
        <h2>Please select a rating below.</h2>
        `<select 
          className="rating-create"
          placeholder='Category'
          name='rank'
          required
          onChange={handleChange}
        >
          <option value='' defaultValue>Select</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='4'>5</option>
        </select>
        
        <Box display="flex" justifyContent="space-around">
        <Button size="small"
                    // sx={ { borderRadius: 10 } }
                    style={{ border: '2px solid' }}
                    href={`wine-details/${id}`}
                    color='secondary'
                  variant='conatined'
                  onClick={handleSubmit}
              >Submit
                </Button>
                </Box>
      </form>
          </div>
        </div>
        </div>
      );
}

export default RatingCreate
