import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from '../reducers/app-reducer'
import App from '../App'
import { menuItemsSelector } from '../selectors/app-selectors'

function stateToProps(state) {
    return {
        menuItem: menuItemsSelector(state),
    }
}

function dispatchToProps(dispatch) {
    return {
        setMenuItem: bindActionCreators(appAction, dispatch).setMenuItem,
    }
}

export default connect(stateToProps, dispatchToProps)(App)
