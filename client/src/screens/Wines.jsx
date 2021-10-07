

function Wines(props) {
  return (
    <div>
      <h1>Our Collection</h1>
      {
        props.wines.map(wine => (
          <>
            <img src={wine.img} alt='Wine Bottle' />
            <p key={`wine${wine.id}`}>{wine.name}</p>
            <p key={`wine${wine.id}`}>{wine.year}</p>
            <button>Details</button>
          </>
        ))
      }
    </div>
  )
}

export default Wines
