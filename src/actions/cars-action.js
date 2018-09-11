/**
 * метод добавляет новый автомобиль в список авто
 * в качестве добавляемого значения идет поле addingCar из редакса
 */
export function addCar() {
    return {
        type: 'ADD_CAR',
    }
}

/**
 * метод изменяет наименование для добавлемого авто
 * @param {string} addingCar 
 */
export function editAddingCar(addingCar) {
    return {
        type: 'EDIT_ADDING_CAR',
        payload: addingCar,
    }
}
