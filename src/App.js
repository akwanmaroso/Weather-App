import React, { Component } from 'react'
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = '2b386b7194ac5349d70191a8d85eb2fc'

class App extends Component {
  state = {
    temperature : '',
    city : '',
    country : '',
    humidity : '',
    speed : '',
    deg : '',
    description : '',
    error : '',
    search : false
  }
  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    if (city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
      const data = await api_call.json()
      console.log(data);
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity: data.main.humidity,
        speed : data.wind.speed,
        deg : data.wind.deg,
        description : data.weather[0].description,
        error : "",
        search : true
      })
    } else {
      this.setState({
        temperature : '',
        city : '',
        country : '',
        humidity: '',
        speed :'',
        deg :'',
        description : '',
        search : false
      })
    }
  }
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 img">
            <Titles />
          </div>
          <div className="col-md-8 form-bg">
            <Form getWeather={this.getWeather} />
          {
            this.state.search ? 
            <Weather 
              temperature={this.state.temperature} 
              city={this.state.city}
              country={this.state.country} 
              humidity={this.state.humidity} 
              speed={this.state.speed}
              deg={this.state.deg}
              description={this.state.description} 
              error={this.state.error} 
              /> :
              null
          }
          </div>
        </div>
      </div>
    )
  }
}

export default App