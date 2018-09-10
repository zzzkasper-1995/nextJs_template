import React from 'react'
import './header.css'
import TempItem from './tempItem'
import logo from '../../img/logo_main.png'
import { ITEM_NAME } from '../../util/constants'


const menuMaker = props => Object.keys(ITEM_NAME).map(item => (
    <TempItem
        name={ITEM_NAME[item]}
        setMenuItem={props.setMenuItem}
        valueKey={item}
        key={item}
        currentItem={props.currentItem === item}
    />))

const handleLogoClick = props => () => props.setMenuItem(ITEM_NAME.ITEM1)

export default props => (
    <div className="header">
        <div className="logo">
            <img src={logo} className="logo_main" onClick={handleLogoClick(ITEM_NAME.ITEM1)} />
        </div>
        {menuMaker(props)}
    </div>
)
