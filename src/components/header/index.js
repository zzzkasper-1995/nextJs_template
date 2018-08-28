import React, { PureComponent } from 'react';
import './header.css';
import TempItem from './tempItem';
import logo from '../../img/logo_main.png';

class Header extends PureComponent {
    render() {
        const {setMenuItem} = this.props;
        return (
            <div className="header">
                <div className="logo" onClick={() => setMenuItem('COUNTYS')}>
                    <img src={logo} className="logo_main" onClick={this.logoClick}/>
                </div>
                <TempItem name="item1" setMenuItem={setMenuItem} valueKey="item1"/>
                <TempItem name="item2" setMenuItem={setMenuItem} valueKey="item2"/>
                <TempItem name="item3" setMenuItem={setMenuItem} valueKey="item3"/>
            </div>
        )
    }
};

export default Header;
