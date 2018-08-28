import React from 'react';
import Head from 'next/head';
import Header from './components/header';
import './App.css';
import favicon from './img/favicon.ico';

export default class App extends React.PureComponent {
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
