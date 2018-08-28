import React, { PureComponent } from 'react';

class CheckBoxes extends PureComponent{

    constructor(props){
        super(props);

        this.state={
            status: ''
        };
    }

    toggleState() {
        this.setState({status: this.state.status==='checked' ? '' : 'checked'});
    }
    render(){
        return (
            <div className='check_box' onClick={this.toggleState.bind(this)}>
                <div className={'checker '+ this.state.status}>{this.props.name}</div>
            </div>
        );
    }
}

export default CheckBoxes;