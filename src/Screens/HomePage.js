import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import QuestionsList from '../Components/QuestionsList'

function HomePage({ dispatch }) {

    return (
        <Fragment>
            <QuestionsList />
        </Fragment>
    )
}

export default connect()(HomePage)