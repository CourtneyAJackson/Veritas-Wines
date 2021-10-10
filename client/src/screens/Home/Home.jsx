import './Home.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function Home() {
  return (
    <div>
      {/* <img className='homepage-image' src='https://ak.picdn.net/shutterstock/videos/23932171/thumb/10.jpg'
        alt='wine glass'
      /> */}
      <header className='homepage-image'>
        Veitas wines
      </header>
      <Box>
      <Button
        href='/wines'
        style={{
          fontSize: 20
        }}
        variant="contained"
        color="secondary"
        size='large'
      >
        Explore Our Collection
        </Button>
      </Box>
      <h1>home page</h1>

      <button>Explore our collection</button>
      <button>Sign In</button>
      <button>Register</button>
      
      
      <div className="wine-of-month-details">
        
         <img className="wine-of-the-month" src='https://wineparity.com/wp-content/uploads/2021/02/2017-Markham-Merlot-300x300.png'
          alt='wine of the month'      
          />
          <h1 className='wine-of-the-title'>Wine of the Month!</h1>
        <p className='wine-of-the-month-paragraph'>The fruit for this Merlot was sourced from California’s renowned Central Coast vineyards, where a cool climate slows the pace of ripening, allowing the grapes to develop rich flavor and deep, concentrated color. This wine opens with aromas of black cherry, Asian plum and cranberry supported by hints of black olive, tea leaf and baking spices. Mocha, brown sugar and sweet oak round out the nose, while the palate brims with dark ripe cherry, Marion berry and plum flavors. Oak aging lends sweet toast and brown sugar notes to the lingering finish.</p>
   
      </div>
    </div>
  )
}

export default Home
