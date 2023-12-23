import React from 'react';
import axios from 'axios';

export default class CarsList extends React.Component
{
    state=
    {
        cars: []
    }

    async componentDidMount()
    {
        try
        {
            const response = await axios.get('http://localhost:3010/cars/getCars');
            this.setState({cars: response.data});
        }
        catch(error)
        {
            console.error(error.message);
        }
    }

    render()
    {
        return(
            <div>
                {this.state.cars.map(
                    car => <div key={car.id}> {car.brand} - {car.model} </div>
                )}
            </div>
        )
    }
}