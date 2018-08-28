import React, { PureComponent } from 'react';
import './header.css';
import TempItem from './tempItem';
import logo from '../../img/logo_main.png';
import { ITEM_NAME } from "../../util/constants";

class Header extends PureComponent {
    menuMaker = () =>
        Object.keys(ITEM_NAME).map(item =>
            <TempItem
                name={ITEM_NAME[item]}
                setMenuItem={this.props.setMenuItem}
                valueKey={item}
                key={item}
                currentItem={this.props.currentItem === item}
            />
        );

    render() {
        console.log('header', this.props);
        const { menuMaker } = this;
        return (
            <div className="header">
                <div className="logo" onClick={() => setMenuItem('COUNTYS')}>
                    <img src={logo} className="logo_main" onClick={this.logoClick}/>
                </div>
                {menuMaker()}
            </div>
        )
    }
};

export default Header;
