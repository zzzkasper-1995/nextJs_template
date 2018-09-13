import { ITEM_NAME } from '../util/constants'
import { SET_MENU_ITEM } from '../util/action-type'

/**
 * menuItem - текущий выбранный раздел меню навигации
 */
const initialState = {
    menuItem: ITEM_NAME.CARS,
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
    case SET_MENU_ITEM:
        return { ...state, menuItem: action.payload }
    default:
        return state
    }
}

/**
 * метод изменяет текущий выбранный пункт меню навигации
 * @param {string} item - наименование пункта меню
 */
export function setMenuItem(item) {
    return {
        type: SET_MENU_ITEM,
        payload: item,
    }
}
