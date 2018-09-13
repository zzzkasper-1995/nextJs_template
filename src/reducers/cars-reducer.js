import { ADD_CAR, EDIT_ADDING_CAR } from '../util/action-type'

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
    case ADD_CAR: {
        if (state.addingCar !== '') {
            return { ...state, carList: [...state.carList, state.addingCar] }
        } return state
    }
    case EDIT_ADDING_CAR:
        return { ...state, addingCar: action.payload }
    default:
        return state
    }
}

/**
 * метод добавляет новый автомобиль в список авто
 * в качестве добавляемого значения идет поле addingCar из редакса
 */
export function addCar() {
    return {
        type: ADD_CAR,
    }
}

/**
 * метод изменяет наименование для добавлемого авто
 * @param {string} addingCar
 */
export function editAddingCar(addingCar) {
    return {
        type: EDIT_ADDING_CAR,
        payload: addingCar,
    }
}
