import React from 'react'

export default class Credits extends React.Component{
    render(){
        return(
            <div className="height2">
                <h1>THE Weather App</h1>
                <h2>Deveoped by Sanjay Nayak(NS TechSolutions ;))</h2>
                <p id='api'>API used : <a target='_blank' href='https://openweathermap.org/'>OpenWeatherMap</a></p>
                <p id="jstfy">This website is developed by Sanjay Nayak completely using React.js .This project was done just to practice
                 React. The logo of this website was picked from a random Google search without any copyright
                  permissions.NO COPYRIGHT INFRINGEMENT INTENDED for the LOGO</p>
            </div>

        )
    }
}