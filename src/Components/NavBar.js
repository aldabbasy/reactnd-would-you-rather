import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

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
                Would you rather?
            </Typography>
            <Link to={`/logout`} style={{ textDecoration: 'none' }} >
            <IconButton aria-label="logout" color="inherit" color='secondary'>
                <ExitToAppIcon />
            </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar
