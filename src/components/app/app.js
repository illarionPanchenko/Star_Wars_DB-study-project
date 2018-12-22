import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import PersonList from "../item-list/item-list";
import Person from "../person/person";
import SwapiService from "../../services/swapi-service";
import Planet from "../planet/planet";
import{ BrowserRouter as Router, Route} from "react-router-dom";
import Starship from "../starship/starship"
import {withRouter} from "react-router-dom";
import LoginPage from '../login-page/login-page.js';
import SecretPage from '../secret-page/secret-page.js';


class PeoplePage extends React.Component{

    swapiService = new SwapiService();
    state={
        ItemSelected: null,
        isLoggedIn: false
    };

    onLogin =()=>{
        this.setState({
            isLoggedIn : true
        })
    };

    onClickOnPerson=(id)=>{
        this.setState({
            ItemSelected: id
        })
    };

    render() {
        return(
            <div className='blockfor row mb2'>
                <PersonList onClickOnPerson={(id)=>{
                    this.props.history.push(id)
                }}
                            getItem={this.swapiService.getAllPeople}
                            renderItem={(item)=>`${item.name} (${item.gender})`}
                />
                <Person personId={this.props.match.params.id}/>

            </div>

        )
    }
}

class PlanetPage extends React.Component{
    swapiService = new SwapiService();
    state={
        ItemSelected: null
    };
    onClickOnPerson=(id)=>{
        this.setState({
            ItemSelected: id
        })
    };
    render() {
        return (
            <div className='blockfor2 row mb2'>
                <PersonList onClickOnPerson={this.onClickOnPerson}
                            getItem={this.swapiService.getAllPlanets}
                            renderItem={(item)=>`${item.name} (diameter: ${item.diameter})`}
                />
                <Planet planetId={this.state.ItemSelected}/>
            </div>
        )
    }

}
class StarshipsPage extends React.Component{
    swapiService = new SwapiService();
    state={
        ItemSelected: null
    };



    onClickOnPerson=(id)=>{
        this.setState({
            ItemSelected: id
        })
    };
    render() {

        return (
            <div className='blockfor2 row mb2'>
                <PersonList onClickOnPerson={(starshipId)=>{
                    this.props.history.push(starshipId);
                }}
                            getItem={this.swapiService.getAllStarships}
                            renderItem={(item)=>`${item.name}`}
                />
            </div>
        )
    }

}



export default class App extends React.Component{
    state={
        ItemSelected: null,
        isLoggedIn: false
    };

    onLogin =()=>{
        this.setState({
            isLoggedIn : true
        })
    };

    render(){
        return(
            <Router>
            <div>
                <Header/>
                <div className='brick'>
                <RandomPlanet />
                    <Route path="/" render={()=>
                        <div className="headDivBoss">
                        <div className="d-flex headDiv">
                            <h2 className="welcome">Welcome to StarDB</h2>
                        </div>
                            <div className="d-flex headDiv">
                            <h3 className="welcome">click on one of pages</h3>
                            </div></div>} exact/>
                    <Route path='/people/:id?' component={PeoplePage}/>
                </div>
                    <Route path="/planets" component={PlanetPage}/>
                    <Route path="/starships" exact component={StarshipsPage}/>
                    <Route path='/secret' exact render={()=>{
                       return (<SecretPage
                           isLoggedIn={this.state.isLoggedIn}/>)
                    }}/>
                    <Route path="/log" exact render={()=>{
                      return  (<LoginPage
                      isLoggedIn={this.state.isLoggedIn}
                      onLogin={this.onLogin}/>)
                    }}/>
                    <Route path="/starships/:id" exact
                    render={({match})=> {
                        const {id} = match.params;
                        console.log(match);
                        return <Starship starshipId={id}/>
                    }}/>
            </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
