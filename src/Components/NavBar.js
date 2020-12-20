import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import StarIcon from '@material-ui/icons/Star'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

function NavBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to={`/`} style={{ textDecoration: 'none', color:'white' }} > 
                Would you rather?
                </Link>
            </Typography>
            <Link to={`/add`} style={{ textDecoration: 'none', color:'white' }} >
              <IconButton aria-label="new question" color="inherit">
                  <AddIcon />
              </IconButton>
            </Link>
            <Link to={`/leaderboard`} style={{ textDecoration: 'none', color:'gold' }} >
              <IconButton aria-label="leaderboard" color="inherit">
                  <StarIcon />
              </IconButton>
            </Link>
            <Link to={`/logout`} style={{ textDecoration: 'none' }} >
              <IconButton aria-label="logout" color='secondary'>
                  <ExitToAppIcon />
              </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar
