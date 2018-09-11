/**
 * carList - список авто
 * addingCar - наименование добавляемого авто
 */
const initialState = {
    carList: ['Audi', 'Lada'],
    addingCar: '',
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
    case 'ADD_CAR': {
        if (state.addingCar !== '') {
            return { ...state, carList: [...state.carList, state.addingCar] }
        } return state
    }
    case 'EDIT_ADDING_CAR':
        return { ...state, addingCar: action.payload }
    default:
        return state
    }
}
