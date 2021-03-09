import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { TextField, Button } from '@material-ui/core'
import Barchart from './Barchart'
import NavBar from './Navbar'
import CircularProgress from '@material-ui/core/CircularProgress'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    height: 300,
    width: 400,
    backgroundColor: '#efefef',
    margin: '0 auto',
    textAlign: 'center',
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Barchart />
      <NavBar />
      <br />

      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete='off'>
          <div>
            <TextField
              id='standard-basic'
              style={{ width: '300px' }}
              label='Email'
            />
            <br />
            <TextField
              id='standard-basic'
              style={{ width: '300px' }}
              label='Password'
            />
          </div>

          <br />
          <div className=''>
            <CircularProgress />
            <Button
              variant='contained'
              style={{ height: '40px', width: '100%' }}
              color='primary'
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

export default App
