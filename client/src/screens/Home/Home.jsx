import Button from '@mui/material/Button'

function Home() {
  return (
    <div>
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
      <h1>home page</h1>

      <button>Explore our collection</button>
      <button>Sign In</button>
      <button>Register</button>
    </div>
  )
}

export default Home
