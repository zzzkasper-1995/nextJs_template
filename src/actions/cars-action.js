export function addCar() {
    return {
        type: 'ADD_CAR',
    }
}

export function editAddingCar(addingCar) {
    return {
        type: 'EDIT_ADDING_CAR',
        payload: addingCar,
    }
}
