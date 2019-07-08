import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PeopleLayout from './PeopleLayout';
const appUrl = process.env.REACT_APP_APP_URL;

class FilmDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            flag: false
        }
        
    }


    componentDidMount = () => {
        axios.get(`${appUrl}api/v1/films/${this.props.match.params.id}`)
        .then((response) => {

            if (response.data.film) {
                const result = response.data.film;
                if (result.characters) {
                    
                    const characters = JSON.parse(result.characters);
                    let promises = [];
                    characters.forEach((item) => {
                        promises.push(axios.get(item))
                    });
                    
                    axios.all(promises).then((results) => {
                        
                        results.forEach((response) => {
                            let data = response.data;
                            data.films = JSON.stringify(response.data.films);
                            data.species = JSON.stringify(response.data.species);
                            data.starships = JSON.stringify(response.data.starships);
                            data.vehicles = JSON.stringify(response.data.vehicles); 
                            
                            this.setState({ characters: [
                                ...this.state.characters,
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
            layout = <PeopleLayout people={ this.state.characters } showViewLink={false} />
        }
        return (
            <div className="Details container  mt-5">
                <Link to={'/page2'} className="btn btn-primary float-right">Go to page 2</Link>
            {
                layout
            }
            </div>
        )
    }
}

export default FilmDetailsPage;