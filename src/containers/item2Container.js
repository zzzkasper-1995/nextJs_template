import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appAction from '../actions/appAction';
import App from '../App';

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
