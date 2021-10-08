import { useState } from 'react'


function RatingCreate(props) {
  const [formData, setFormData] = useState({
    rank: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleRatingCreate(formData);
      }}>
        `<select
          className="rating-create"
          placeholder='Category'
          value={formData.rank}
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
