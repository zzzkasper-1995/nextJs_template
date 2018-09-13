import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as carsAction from '../reducers/cars-reducer'
import Cars from '../components/cars'
import { carListSelector } from '../selectors/cars-selectors'

function stateToProps(state) {
    return {
        carList: carListSelector(state),
        addingCar: carListSelector(state),
    }
}

function dispatchToProps(dispatch) {
    return {
        addCar: bindActionCreators(carsAction, dispatch).addCar,
        editAddingCar: bindActionCreators(carsAction, dispatch).editAddingCar,
    }
}

export default connect(stateToProps, dispatchToProps)(Cars)
