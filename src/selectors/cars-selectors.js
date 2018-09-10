import { createSelector } from 'reselect'

export const carListSelector = createSelector(
    ({ carsReducer }) => carsReducer.carList,
    carList => carList,
)

export const addingCarSelector = createSelector(
    ({ carsReducer }) => carsReducer.addingCar,
    addingCar => addingCar,
)
