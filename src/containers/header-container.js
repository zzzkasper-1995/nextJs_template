import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from '../reducers/app-reducer'
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
