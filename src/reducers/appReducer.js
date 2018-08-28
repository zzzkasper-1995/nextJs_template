const initialState = {
    menuItem: 'VIDEOS',
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
    case 'SET_MENU_ITEM':
        return { ...state, menuItem: action.payload };
    default:
        return state;
    }
}