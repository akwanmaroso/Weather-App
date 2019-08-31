import React from 'react'

const Form = (props) => {
    return (
        <div className="result">
            <h2>Weather Result : </h2>
            {/* <hr/> */}
                <p>
                Location : {props.city} ,{props.country} 
            </p>
            <p>
                Temperature : {props.temperature}
            </p>
            <p>
                Humidity : {props.humidity} <br />
            </p>
            <p>
                Wind : {props.speed} / {props.deg} <br />
            </p>
            <p>
                Description : {props.description}
            </p>
        </div>
    )
}

export default Form

