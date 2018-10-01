import React from 'react'
import './style.css'

const showCars = carList => carList.map((car, index) => (
    <li key={index}>
        {car}
    </li>
))

const handleClickAdd = addCar => () => {
    addCar()
}

const onChangeCar = editAddingCar => e => editAddingCar(e.target.value)

export default (props) => {
    const { title, carList, addCar, editAddingCar } = props
    return (
        <div className="cars">
            <div className="title">
                {title}
            </div>
            <div className="addBox">
                <input
                    type="text"
                    id="addBox"
                    className="search_filter"
                    onChange={onChangeCar(editAddingCar)}
                />
                <label htmlFor="addBox" />
                <div className="buttonAdd" onClick={handleClickAdd(addCar)}>
                    Добавить
                </div>
            </div>
            <ul>
                {showCars(carList)}
            </ul>
        </div>
    )
}
