import React, { PureComponent } from 'react';
import './style.css';

class Item2 extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <div className="item2">
                <div className="title">
                    {title}
                </div>
            </div>
        )
    }
};

export default Item2;
