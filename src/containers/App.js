import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ScrollBox from '../components/ScrollBox';
import ErrorBoundry from '../components/ErrorBoundry';
import styled from 'styled-components';

const Title = styled.h1`
    color: #000;
    text-weight: bold;
    font-size: 6em;
    display: block;
    text-align: center;
    margin-top: .2em;
    margin-bottom: .3em;
`

const SearchSection = styled.section`
    text-align: center;
    padding-bottom: 1em;
`


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
            <div className="top">
                <Title>RoboFriends</Title>
                <SearchSection>
                    <SearchBox searchChange={this.onSearchChange} searchField={searchField}/>
                </SearchSection>
                    
            <ScrollBox height="80%" width="100%">
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </ScrollBox>
            </div>
        );
    } 
}

export default App;