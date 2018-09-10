import { createSelector } from 'reselect'

export const menuItemsSelector = createSelector(
    ({ appReducer }) => appReducer.menuItem,
    menuItem => menuItem,
)
