import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getOneWine } from "../../services/wines"
import './WineDetail.css'
import Button from '@mui/material/Button'
import StarRatings from "react-star-ratings"
import { Box } from "@mui/system"

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { StylesProvider, createGenerateClassName } from '@mui/material/styles';
// import { makeStyles } from "@mui/styles"
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 340,
//   }
// })

// const styles = 
// {

// media: {
//   height: 0,
//   paddingTop: '56.25%', // 16:9,
//   marginTop:'30'
// }
// };

// const useStylesGrid = makeStyles((theme) => ({
//   gridPaper: {
//     padding: 5,
//     textAlign: "center",
//     backgroundColor: "#EEE0D0",
//   },
// }));

export default function WineDetails(props) {

  // const classesGrid = useStylesGrid();

  // const classes = useStyles()
  const [wineInfo, setWineInfo] = useState(null)
  const { id } = useParams()


  useEffect(() => {
    const fetchOneWine = async () => {
      const wineData = await getOneWine(id)
      setWineInfo(wineData)
      console.log(wineData)
    }
    fetchOneWine()
  }, [props.toggle, id])

  if (!wineInfo) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='wine-detail-container'>
      {/* <Grid item m>
      <Paper className={classesGrid.gridPaper} variant="outlined" elevation={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActions>
          <CardMedia componenet="img" image= title="wine bottle" style={{height: 0, paddingTop: '56.25%'}} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" > */}
      <div className='wine-card-continer'>
        <div className="detail-card">
          <img className='wine-detail-img' src={wineInfo.img}
            alt='wine bottle'
          />
          <div className='detail-info'>
            <p className="detail-name">{wineInfo.name}</p>
            <p className="detail-year">{wineInfo.year}</p>
            <p className="detail-price">{`$${wineInfo.price}.00`}</p>
            {/* </Typography>
            <Typography variant="body2" color="textSecondary" component="p"> */}
            <p className="detail-paragraph">{wineInfo.description}</p>
            {/* </Typography>
          </CardContent>
        </CardActions> */}
          </div>
          {wineInfo.ratings.map((rating) => (
            <>
              <StarRatings
                rating={Number(rating.rank)}
                starDimension="40px"
                starSpacing="15px"
              />
              <Box display="flex" justifyContent="space-around">
                <Button
                  size="small"
                  sx={{ borderRadius: 10 }}
                  style={{ border: '2px solid' }}
                  href={`/ratings/${rating.id}/edit`}
                  size="small"
                  varient='contained'
                  color="primary">

                  Edit Rating
                </Button>
                {/* <button>
              <Link to={`/ratings/${rating.id}/edit`}></Link>
            </button> */}
                <Button
                  size="small"
                  sx={{ borderRadius: 10 }}
                  style={{ border: '2px solid' }}
                  size="small"
                  color="secondary"
                  onClick={() => props.handleRatingDelete(rating.id)}>
                  Delete
                </Button>
              </Box>

            </>

          ))}

        </div>
      </div>
      {/* <button>
          <Link to={`/ratings/${id}/new`}>Add a Rating</Link>
      </button> */}
      {/* </Card>
      </Paper >
  </Grid > */}
    </div >
  )
}
