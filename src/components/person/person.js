import React from 'react';
import './person.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class Person extends React.Component{

    swapiService = new SwapiService();

    state={
        person:null,
        loader: false,
    };

    componentDidMount() {
        this.updatePerson()

    };
    componentDidUpdate(prevProps) {
        if(prevProps.personId!==this.props.personId){
            this.updatePerson()
            this.setState({
                loader: true
            })
        }
    }

    updatePerson=()=>{
        const {personId} = this.props;
        if(!personId){
            return;
        }
        this.swapiService.getPerson(personId).then((person)=>{
        this.setState({
            person,
            loader: false
        })}
        )}


;


    render(){

        if(this.state.loader){
            return <Spinner />
        }

        if(!this.state.person && !this.state.loader){
            return(
                <span className="select">Please, select some person</span>
            )
        }

        const {id, name, gender} = this.state.person;

        return(
            <div className='container-person'>

                <div className='person-box d-flex'>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                             alt="character" className='image-2'/>
                    <div className='text-box'>
                        <h3 className='planet-text'> {name} </h3>
                        <h4 className='planet-text'>{`Gender: ${gender}`}</h4>
                    </div>
                </div>
            </div>
        )
    }
}