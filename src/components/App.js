import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../actions/appAction';
import Header from './header/index';
import './App.css';
import favicon from '../img/favicon.ico';

class App extends React.PureComponent {
    render() {
        // console.log('App', this.props)
        const { appAction } = this.props;
        return(
            <div className="App">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300i,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
                    <title>nextJs template</title>
                    <link rel="icon" type="image/x-icon" href={favicon} />
                </Head>
                <div className="container">
                    <Header setMenuItem={appAction.setMenuItem}/>
                </div>
            </div>
        )
    }
}

function stateToProps (state) {
    return {
        menuItems: state.appReducer.menuItem,
    };
}

function dispatchToProps(dispatch) {
    return {
        appAction: bindActionCreators(appAction, dispatch),
    };
}

export default connect(stateToProps, dispatchToProps)(App);
