import React from 'react';
import './starship.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class Starship extends React.Component{

    swapiService = new SwapiService();

    state={
        starship:null,
        loader: false,
    };

    componentDidMount() {
        this.updateStarship()

    };
    componentDidUpdate(prevProps) {
        if(prevProps.starshipId!==this.props.starshipId){
            this.updateStarship()
            this.setState({
                loader: true
            })
        }
    }

    updateStarship=()=>{
        const {starshipId} = this.props;
        if(!starshipId){
            return;
        }
        this.swapiService.getStarship(starshipId).then((starship)=>{
            this.setState({
                starship,
                loader: false
            })}
        )}


    ;


    render(){

        if(this.state.loader){
            return <Spinner/>
        }

        if(!this.state.starship){
            return <Spinner/>
        }

        const {id, name, passengers,model,manufacturer} = this.state.starship;

        return(
            <div className='container-starship'>

                <div className='starship-box d-flex'>
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                         alt="character" className='image-5'/>
                    <div className='starshipText-box'>
                        <h3 className='planet-text'> {name} </h3>
                        <h4 className='planet-text'>{`passengers: ${passengers}`}</h4>
                        <h4 className='planet-text'>{`model: ${model}`}</h4>
                        <h4 className='planet-text'>{`manufacturer: ${manufacturer}`}</h4>
                    </div>
                </div>
            </div>
        )
    }
}