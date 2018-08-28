import React, { PureComponent } from 'react'
import './style.css'

class Item3 extends PureComponent {
    render() {
        const { title } = this.props
        return (
            <div className="item3">
                <div className="title">
                    {title}
                </div>
            </div>
        )
    }
}

export default Item3
