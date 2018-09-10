import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as item1Action from '../actions/item1Action'
import Item1 from '../components/item1'
import { carListSelector } from '../selectors/item1-selectors'

function stateToProps(state) {
    return {
        carList: carListSelector(state),
    }
}

function dispatchToProps(dispatch) {
    return {
        addCar: bindActionCreators(item1Action, dispatch).addCar,
    }
}

export default connect(stateToProps, dispatchToProps)(Item1)
