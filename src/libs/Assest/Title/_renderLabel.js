import React, { Fragment } from 'react'

export default function _renderLabel(title) {
    return (
        <Fragment>
            <span className={'text-danger pr-1 '}>*</span>
             <label> {title} :</label>
        </Fragment>
    )
}
