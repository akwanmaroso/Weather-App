import React from 'react'

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.getWeather} className="form-inline" autoComplete="off">
                <input type="text" name="city" placeholder="City..." className="form-control" />
                <input type="text" name="country" placeholder="Country..." className="form-control"/>
                <button className="subtn">Get Weather</button>
            </form>
        </div>
    )
}

export default Form

