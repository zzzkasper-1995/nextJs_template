import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from '../actions/app-action'
import Header from '../components/header'
import { menuItemsSelector } from '../selectors/header-selectors'

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

export default connect(stateToProps, dispatchToProps)(Header)
