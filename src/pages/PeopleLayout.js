import React from 'react';
import {Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import ToggleRow from './ToggleRow';

const PeopleLayout = (props) => {
    return (
         <div className="films">
            {
                props.people.length > 0 &&
                <div>
                    <h2>People</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.people.map((person) => {
                                    return <tr key={ person.id }>
                                            <td>
                                            <ToggleRow 
                                                        head={
                                                            <div className="row">
                                                                <div className="col-md-10">{person.name}</div>
                                                                <div className="col-md-2">
                                                                    {
                                                                        props.showViewLink &&
                                                                        <Link className="btn btn-primary btn-sm" to={ `/page2/people/${person.id}` }>View Films</Link>
                                                                    }
                                                                </div>
                                                            </div>
                                                        }
                                                        body={
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <ul className="film-info list-unstyled">
                                                                        <li><strong>Url: </strong><span>{person.url}</span></li>
                                                                        <li><strong>Created: </strong><span>{ person.created }</span></li>
                                                                        <li><strong>Edited: </strong><span>{person.edited}</span></li>
                                                                        <li>
                                                                            <strong>Eye Color: </strong>
                                                                            <span>{person.eye_color}</span>
                                                                        </li>
                                                                        <li>
                                                                            <strong>Gender: </strong>
                                                                            <span>{person.gender}</span>
                                                                        </li>
                                                                        <li><strong>Hair Color: </strong><span>{person.hair_color}</span></li>
                                                                        <li><strong>Height: </strong><span>{person.height}</span></li>
                                                                        <li><strong>Mass: </strong><span>{person.mass}</span></li>
                                                                        <li><strong>Skin Color: </strong><span>{person.skin_color}</span></li>
                                                                        <li><strong>Home World: </strong><span>{person.homeworld}</span></li>
                                                                        <li>
                                                                            <strong>Films: </strong>
                                                                            <span>
                                                                                {
                                                                                    JSON.parse(person.films).map((item) => {
                                                                                        return <h6 key={ item }><Badge variant="secondary">{ item }</Badge></h6>
                                                                                    })
                                                                                
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                        <li><strong>Species: </strong>
                                                                            <span>{
                                                                                JSON.parse(person.species).map((item) => {
                                                                                    return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                                })
                                                                        
                                                                            }</span>
                                                                        </li>
                                                                        <li>
                                                                            <strong>Starships: </strong>
                                                                            <span>{
                                                                                JSON.parse(person.starships).map((item) => {
                                                                                    return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                                })
                                                                            
                                                                            }</span>
                                                                        </li>
                                                                        <li>
                                                                            <strong>Vehicles:</strong>
                                                                            <span>{
                                                                                JSON.parse(person.vehicles).map((item) => {
                                                                                    return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                                })
                                                                            
                                                                            }
                                                                            </span>
                                                                        </li>
                                                                    </ul>
                                                                    
                                                                    
                                                                </div>
                                                            </div>
                                                        }
                                                    />
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
            </div>
    )
}


export default PeopleLayout;