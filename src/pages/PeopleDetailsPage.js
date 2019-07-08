import React from 'react';
import axios from 'axios';
import FilmsLayout from './FilmsLayout';
import {Link} from 'react-router-dom';

const appUrl = process.env.REACT_APP_APP_URL;


class PeopleDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            flag: false
        }
    }


    componentDidMount = () => {
        axios.get(`${appUrl}api/v1/people/${this.props.match.params.id}`)
        .then((response) => {
            
            

            if (response.data.people) {
                const result = response.data.people;
                if (result.films) {
                    
                    const films = JSON.parse(result.films);
                    let promises = [];
                    films.forEach((item) => {
                        promises.push(axios.get(item))
                    });
                    
                    axios.all(promises).then((results) => {
                        
                        results.forEach((response) => {
                            let data = response.data;
                            data.species = JSON.stringify(response.data.species);
                            data.starships = JSON.stringify(response.data.starships);
                            data.vehicles = JSON.stringify(response.data.vehicles);
                            data.characters = JSON.stringify(response.data.characters);
                            data.planets = JSON.stringify(response.data.planets);   
                            
                            this.setState({ films: [
                                ...this.state.films,
                                data
                            ] });

                        });
                        this.setState({ flag: true });

                    });

                    
                    
                    
                }
            }
        });
    }


    render() {
        let layout = <span>Loading...</span>;
        if (this.state.flag) {
            layout = <FilmsLayout films={ this.state.films } showViewLink={false} />
        }

        return (
            <div className="Details container mt-5">
                <Link to={'/page2'} className="btn btn-primary float-right">Go to page 2</Link>
            {
                layout
            }
            </div>
        )
    }
}

export default PeopleDetailsPage;