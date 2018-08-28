import React from 'react';
import Head from 'next/head';
import Header from './components/header';
import './App.css';
import favicon from './img/favicon.ico';
import Item1 from './components/item1/index';
import Item2 from './components/item2/index';
import Item3 from './components/item3/index';

export default class App extends React.PureComponent {
    menuBlock = () => {
        const { menuItems } = this.props;
        switch (menuItems) {
            case 'ITEM1':
                return <Item1 title={'item1'}/>
            case 'ITEM2':
                return <Item2 title={'item2'}/>;
            case 'ITEM3':
                return <Item3 title={'item3'}/>;
            default:
                return <Item1 title={'item1'}/>;
        }
    }

    render() {
        console.log('App', this.props)
        const { menuBlock, props: {appAction} } = this;
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
                <div>
                    {menuBlock()}
                </div>
            </div>
        )
    }
}
