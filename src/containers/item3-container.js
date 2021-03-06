import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appAction from '../reducers/app-reducer'
import Item3 from '../components/item3'

function stateToProps(state) {
    return {
        menuItems: state.appReducer.menuItem,
    }
}

function dispatchToProps(dispatch) {
    return {
        appAction: bindActionCreators(appAction, dispatch),
    }
}

export default connect(stateToProps, dispatchToProps)(Item3)
