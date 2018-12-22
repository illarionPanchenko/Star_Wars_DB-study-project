import React from 'react';
import './planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class Planet extends React.Component{

    swapiService = new SwapiService();

    state={
        planet:null,
        loader: false,
    };

    componentDidMount() {
        this.updatePlanet()

    };
    componentDidUpdate(prevProps) {
        if(prevProps.planetId!==this.props.planetId){
            this.updatePlanet()
            this.setState({
                loader: true
            })
        }
    }

    updatePlanet=()=>{
        const {planetId} = this.props;
        if(!planetId){
            return;
        }
        this.swapiService.getPlanet(planetId).then((planet)=>{
            this.setState({
                planet,
                loader: false
            })}
        )}


    ;


    render(){

        if(this.state.loader){
            return <Spinner/>
        }

        if(!this.state.planet){
            return(
                <span className="select">Please, select some planet</span>
            )
        }

        const {id, name, diameter} = this.state.planet;

        return(
            <div className='container-person'>

                <div className='person-box d-flex'>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt="character" className='image-3'/>
                    <div className='text-box'>
                        <h3 className='planet-text'> {name} </h3>
                        <h4 className='planet-text'>{`Diameter: ${diameter}`}</h4>
                    </div>
                </div>
            </div>
        )
    }
}