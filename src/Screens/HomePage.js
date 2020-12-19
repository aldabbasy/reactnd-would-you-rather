import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

import QuestionsList from '../Components/QuestionsList'

function HomePage({ dispatch }) {

    return (
        <Fragment>
            <Link to={`/logout`} >
                <Button type="button" fullWidth variant="contained" color="secondary">
                    Log out
                </Button>
            </Link>
            <QuestionsList />
        </Fragment>
    )
}

export default connect()(HomePage)