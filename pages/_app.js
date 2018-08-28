import React from 'react'
import { Provider } from 'react-redux'
import NextApp, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import initStore from '../src/store'

class App extends NextApp {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(initStore)(App)
