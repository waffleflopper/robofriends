import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: '',
        }
    }


    onSearchChange = (evt) => {
        this.setState({searchField: evt.target.value });
        //console.log(filteredRobots);
    }

    catchEmpty = (filteredRobots) => {
        if (filteredRobots.length < 1 ) {
            filteredRobots.push({
                id: 99999999,
                name: "Oh Nos!",
                username: "There were no results",
                email: "Try Searching Again :(",
            });
        };
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots=> {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        this.catchEmpty(filteredRobots);

        return (
            <div>
                <nav class="pa3 pa4-ns">
                <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">RoboFriends</a>
                <div class="tc pb3">
                    <SearchBox searchChange={this.onSearchChange} searchField={this.state.searchField}/>
                </div>
            </nav>
                <CardList robots={filteredRobots}/>
            </div>
        );
    } 
}

export default App;