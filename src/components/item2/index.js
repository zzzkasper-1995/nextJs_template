import React from 'react'
import './style.css'

export default (props) => {
    const { title } = props
    return (
        <div className="item2">
            <div className="title">
                {title}
            </div>
        </div>
    )
}
