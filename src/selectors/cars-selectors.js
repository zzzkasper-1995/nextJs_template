import { createSelector } from 'reselect'

/**
 * селектор для carList
 */
export const carListSelector = createSelector(
    ({ carsReducer }) => carsReducer.carList,
    carList => carList,
)

/**
 * селектор для addingCar
 */
export const addingCarSelector = createSelector(
    ({ carsReducer }) => carsReducer.addingCar,
    addingCar => addingCar,
)
