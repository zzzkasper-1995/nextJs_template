import React, { PureComponent } from 'react';
import './header.css';
import TempItem from './tempItem';
import logo from '../../img/logo_main.png';

class Header extends PureComponent {
    logoClick=()=>{
        console.log('Login click');
    }

    loginClick=() => {
        console.log('Login click')
    }

    render() {
        const {setMenuItem} = this.props;
        return (
            <div className="header">
                <div className="logo" onClick={() => setMenuItem('COUNTYS')}>
                    <img src={logo} className="logo_main" onClick={this.logoClick}/>
                </div>
                <TempItem name="Видео" setMenuItem={setMenuItem} valueKey="VIDEOS"/>
                <TempItem name="Видео" setMenuItem={setMenuItem} valueKey="VIDEOS"/>
                <TempItem name="temp2" setMenuItem={setMenuItem} valueKey="temp2"/>
            </div>
        )
    }
};

export default Header;
