export function setMenuItem(item) {
    return {
        type: 'SET_MENU_ITEM',
        payload: item,
    };
}

export const init = () => ({ type: 'APP_INIT' })
