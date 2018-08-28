import React, { PureComponent } from 'react';
import './style.css';

class Item1 extends PureComponent {
    render() {
        const { title } = this.props;
        return (
            <div className="item1">
                <div className="title">
                    {title}
                </div>
            </div>
        )
    }
};

export default Item1;
