import './Wines.css'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
// import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box'




function Wines(props) {

  // const useStylesGrid = makeStyles((theme) => ({
  //   gridRoot: {
  //     flexGrow: 1,
  //     margin: 32,
  //   },
  // }));




  return (
    <>
      <div className='wine-collection-container'>
        <div className="our-collection-title">
          <h1>Our Collection</h1>
          {/* <Card>
          <CardActionArea> */}
        </div>

        <div className='wine-row'>

          {
            props.wines.map(wine => (
              <div className="wine-card">
                {/* <div className="wine-img-list"> */}
                <img className='wine-img' src={wine.img} alt='Wine Bottle' />
                {/* </div> */}
                <div className='name-year-title'>
                  <p>{wine.name}</p>
                  <p>{wine.year}</p>

                  {wine.ratings.map((rating) => (
                    <StarRatings
                      rating={Number(rating.rank)}
                      starDimension="25px"
                      starSpacing="15px"
                    />
                  ))}
                  <Box display="flex" justifyContent="space-between">
                    <Button
                      size="small"
                      sx={ { borderRadius: 10} }
                    style={{ border: '2px solid' }}
                    className='add-rating'
                    href={`wine-details/${wine.id}/new`}
                    color='primary'
                    variant='contained'
                  >
                    Add a Rating

                  </Button>
                    <Button
                    size="small"
                    sx={ { borderRadius: 10 } }
                    style={{ border: '2px solid' }}
                    href={`wine-details/${wine.id}`}
                    color='secondary'
                    variant='conatined'
                  >
                    Wine Details
                    </Button>
                  </Box>
                  
                </div>
              </div>
            ))
          }

        </div>
        {/* </CardActionArea>
        </Card> */}
      </div>
    </>
  )
}

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
export default Wines
