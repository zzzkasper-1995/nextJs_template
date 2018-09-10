import React from 'react'
import './style.css'

const showCars = carList => carList.map(car => (
    <li key={car}>
        {car}
    </li>
))

export default (props) => {
    console.log(props)
    const { title, carList } = props
    return (
        <div className="item1">
            <div className="title">
                {title}
            </div>
            <ul>
                {//showCars(carList)
                }
            </ul>
        </div>
    )
}
