/**
 * метод изменяет текущий выбранный пункт меню навигации
 * @param {string} item - наименование пункта меню
 */
export function setMenuItem(item) {
    return {
        type: 'SET_MENU_ITEM',
        payload: item,
    }
}
