import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import { handleInitialData } from '../Actions/shared'

function HomePage({ dispatch }) {

    useEffect(() => {
        dispatch(handleInitialData())
    }, []);

    return (
        <Fragment>
            <Link to={`/logout`} >
                <Button type="button" fullWidth variant="contained" color="primary">
                    Log out
                </Button>
            </Link>
        </Fragment>
    )
}

export default connect()(HomePage)