import React, { PureComponent } from 'react'

class TempItem extends PureComponent {
    render() {
        // console.log('TempItem', this.props);
        const { setMenuItem, valueKey, currentItem, name } = this.props
        return (
            <div className="temp_item" onClick={() => setMenuItem(valueKey)}>
                <div className={`title ${currentItem}`}>{name}</div>
            </div>
        )
    }
}

export default TempItem
