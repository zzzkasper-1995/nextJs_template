import React from 'react'

const handleItemClick = props => () => props.setMenuItem(props.valueKey)

export default (props) => {
    const { currentItem, name } = props
    return (
        <div className="temp_item" onClick={handleItemClick(props)}>
            <div className={`title ${currentItem}`}>{name}</div>
        </div>
    )
}
