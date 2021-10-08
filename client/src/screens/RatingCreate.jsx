import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addRatingToWine } from '../services/ratings';
import {getOneWine } from '../services/wines'


function RatingCreate(props) {

  const [wineItem, setWineItem] = useState(null);
  const [selectedRating, setSelectedRating] = useState('');
  const { id } = useParams();
  const { wines } = props;

  useEffect(() => {
    const fetchWineItem = async () => {
      const wineData = await getOneWine(id);
      setWineItem(wineData);
    };
    fetchWineItem();
  }, [id]);
  // const [formData, setFormData] = useState({
  //   rank: ''
  // })

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { value } = e.target;
    setSelectedRating(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const oneWineItem = await addRatingToWine(selectedRating, id);
    setWineItem(oneWineItem);
    console.log(wineItem)
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        `<select 
          className="rating-create"
          placeholder='Category'
          // value={formData.rank}
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
        <button>Submit</button>
      </form>
      );
    </div>
  )
}

export default RatingCreate
