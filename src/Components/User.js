import React, { Fragment } from 'react'
import { connect } from "react-redux"
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: '1.25%',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    avatar: {
      width: 151,
    },
    score: {
        maxWidth: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: '1.25%',
    }
}))

function User({ user }) {
    const classes = useStyles()
    return (
        <Fragment>
            <Card className={classes.root}>

                <CardHeader
                    avatar={
                        <Avatar alt={user.name} src={user.avatarURL} />
                    }
                    title= { user.name }
                    classes={{backgroundColor: 'red'}}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Number of Questions: { user.questions.length }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Number of Answers: { Object.keys(user.answers).length }
                    </Typography>
                </CardContent>
            </Card>
        <Card className={classes.score}>
            <CardHeader component="li"
                title= {"Score: " + Object.keys(user.answers).length + user.questions.length} 
            />
        </Card>
    </Fragment>
    )
}

const mapStateToProps = ({ users }, { uid }) => {
    const user = users[uid]
    return {
        user
    }
}
  
export default connect(mapStateToProps)(User)