import './Home.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function Home() {
  return (
    <div>
      <div className="home-header">
        <header className='homepage-image'>
          <div className="logo-motto">
            <img className="logo" src="https://lh3.googleusercontent.com/pxh0Tw16-XwE7RbbDtyXRMUa00FvbjxVrv2LGRMqHxg00xXIQz-rRJiUzviBiiBCRcUljvWHJY9xv0WoYLQPE611QSfNRKx7SDQiAcCfWO2357K6hGwmXWpboNT8eNL6YUuzR9SF=s200-p-k"
              alt="logo"
            />
            <h1 className="truth-motto">"In Wine There Is TRUTH."</h1>
          </div>
        </header>
      </div>
      <div className="home-bottom-screen">
        <Box>
          <div className='homepage-button'>
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
        </div>
      </Box>
      <div className="wine-of-month-details">
        <img className="wine-of-the-month" src='https://wineparity.com/wp-content/uploads/2021/02/2017-Markham-Merlot-300x300.png'
          alt='wine of the month'
          />
          <div className="title-paragraph">
        <h1 className='wine-of-the-title'>Wine of the Month!</h1>
        <p className='wine-of-the-month-paragraph'>The fruit for this Merlot was sourced from California’s renowned Central Coast vineyards, where a cool climate slows the pace of ripening, allowing the grapes to develop rich flavor and deep, concentrated color. This wine opens with aromas of black cherry, Asian plum and cranberry supported by hints of black olive, tea leaf and baking spices. Mocha, brown sugar and sweet oak round out the nose, while the palate brims with dark ripe cherry, Marion berry and plum flavors. Oak aging lends sweet toast and brown sugar notes to the lingering finish.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
