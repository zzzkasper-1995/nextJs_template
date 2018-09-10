const initialState = {
    carList: [],
}

export default function userstate(state = initialState, action) {
    switch (action.type) {
    case 'ADD_CAR':
        return { ...state, carList: [...state.carList, action.payload] }
    default:
        return state
    }
}
