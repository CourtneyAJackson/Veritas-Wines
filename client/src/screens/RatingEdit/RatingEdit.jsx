import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { putRating, getOneRating } from '../../services/ratings';
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'

export default function RatingEdit(props) {
 const [wineId, setWineId] = useState(null);
  const [formData, setFormData] = useState({
    rank: '',
  });

  const { id } = useParams();
  let history = useHistory()
  
  // const [updatedRating, setUpdatedRating] = useState('');
 

  useEffect(() => {
    const fetchRating = async () => {
      const rankData = await getOneRating(id);
      setWineId(rankData.wine_id) 
      setFormData((prev)  => ({
         ...prev,
          rank: rankData.rank
      }));
    };
    fetchRating();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    // setUpdatedRating(value)
    setFormData((prev)  => ({
      ...prev,
       rank: value
   }));
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newRating = await putRating(formData, id);
  //   // setWineItem(oneWineItem);
  //   history.push(`/wine-details/${id}`)
  


  return (
    <>
    <div className="outter-edit-container">
    <div className="form-eidt-container">
      <div className="edit-container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          props.handleRatingEdit(formData, id, wineId)
        }}>
        <h2 className="edit-title">Please select a rating below.</h2>
        <select
          className="rating-edit"
          placeholder='Category'
          value={formData.rank}
          name='rank'
          required
          onChange={handleChange}
        >
          <option value={formData.rank} defaultValue>{ formData.rank }</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
              </select>
              {/* <Box display="flex" justifyContent="space-around">
        <Button size="small"
                    // sx={ { borderRadius: 10 } }
                    style={{ border: '2px solid' }}
                    // href={`/wine-details/${id}`}
                    color='secondary'
                  variant='conatined'
                   onClick={handleSubmit}
              >Submit
                </Button>
                </Box> */}
              <button >SUBMIT</button>
          </form>
        </div>
      </div>
      </div>
    </>
   
  )
}