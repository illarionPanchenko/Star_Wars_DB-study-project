import React from 'react';
import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner.js"



export default class RandomPlanet extends React.Component {

    constructor() {
        super();
        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            loader: true
        };
    }

    componentDidMount() {
        this.updatePlanet();
       this.interval=setInterval(this.updatePlanet, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    swapiService = new SwapiService();

    updatePlanet=()=>{
        const id = Math.floor(Math.random() * 18) + 1;
        this.swapiService.getPlanet(id).then((x) => {
            this.setState({
                id,
                name: x.name,
                population: x.population,
                rotationPeriod: x.rotation_period,
                diameter: x.diameter,
                loader: false
            })
        })
    };

    render() {

        const {id, name, population, rotationPeriod, diameter, loader} = this.state;

        if(loader){
            return <Spinner />
        }

        return (
            <div className='container'>
                <div className='random-planet d-flex'>
                    <div>
                        <img className='image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                    </div>
                    <div className='text'>
                        <h3 className='planet-text'> name: {name}</h3>
                        <h4 className='planet-text'> population: {population}</h4>
                        <h4 className='planet-text'> rotationPeriod: {rotationPeriod}</h4>
                        <h4 className='planet-text'> diameter: {diameter}</h4>

                    </div>
                </div>
            </div>
        )
    }
}
