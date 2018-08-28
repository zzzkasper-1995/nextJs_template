import React, { PureComponent } from 'react';
import CheckBox from './checkBox';

class FlyersCheckbox extends PureComponent{
    render(){
        return(
            <div className="flyers_checkbox">
                <div className='title'>Выдача листовок</div>
                <div className='checkBoxes'>
                    <CheckBox name='Расклейка'/>
                    <CheckBox name='Ящики'/>
                    <CheckBox name='Этажи'/>
                </div>
                <div className='clearfix'></div>
            </div>
        )
    }
}

export default FlyersCheckbox;