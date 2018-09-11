import { createSelector } from 'reselect'

/**
 * селектор для menuItem
 */
export const menuItemsSelector = createSelector(
    ({ appReducer }) => appReducer.menuItem,
    menuItem => menuItem,
)
