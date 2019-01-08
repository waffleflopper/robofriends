import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBox from '../components/ScrollBox';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //get the file
        .then(response => response.json()) // convert it with json magic
        .then(users => this.setState({ robots: users})) // set it as our robots array
    }

    onSearchChange = (evt) => {
        this.setState({searchField: evt.target.value });
        //console.log(filteredRobots);
    }

    catchEmpty = (filteredRobots) => {
        if (!filteredRobots.length) {
            filteredRobots.push({
                id: 99999999,
                name: "Oh Nos!",
                username: "There were no results",
                email: "Try Searching Again :(",
            });
        };
    }
 
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        this.catchEmpty(filteredRobots);

        return (
            <div>
                <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="index.js" title="Home">RoboFriends</a>
                <div class="tc pb3">
                    <SearchBox searchChange={this.onSearchChange} searchField={searchField}/>
                </div>
            <ScrollBox height="600px">
                <CardList robots={filteredRobots}/>
            </ScrollBox>
            </div>
        );
    } 
}

export default App;