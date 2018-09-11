import { ITEM_NAME } from '../util/constants'

/**
 * menuItem - текущий выбранный раздел меню навигации
 */
const initialState = {
    menuItem: ITEM_NAME.CARS,
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
    case 'SET_MENU_ITEM':
        return { ...state, menuItem: action.payload }
    default:
        return state
    }
}
