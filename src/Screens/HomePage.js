import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function HomePage({ dispatch }) {
    return (
        <div>
            <Link to={`/logout`} >
                <Button type="button" fullWidth variant="contained" color="primary">
                    Log out
                </Button>
            </Link>
        </div>
    )
}

export default connect()(HomePage)