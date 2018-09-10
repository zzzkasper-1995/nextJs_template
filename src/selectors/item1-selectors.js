import { createSelector } from 'reselect'

export const carListSelector = createSelector(
    ({ item1Reducer }) => item1Reducer.carList,
    carList => carList,
)
