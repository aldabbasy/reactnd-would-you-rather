import React from 'react'
import { connect } from "react-redux"
import User from '../Components/User'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabs: {
        color: '#40a9ff',
    },
    list: {
    }
}))

function Leaderboard({ users }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <List className={classes.list}>
                {users.map((user) => (
                    <div key={user.id} component="li">
                        <User uid={user.id} />
                        <Divider variant="inset"  />
                    </div>
                ))}
            </List>
        </div>
    )
}

const mapStateToProps = ({ users }) => {
    const userScore = user =>
        Object.keys(user.answers).length + user.questions.length
    return {
        users: Object.values(users).sort((a, b) => userScore(b) - userScore(a))
    }
}
  
export default connect(mapStateToProps)(Leaderboard)