import React from 'react';

import {Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import ToggleRow from './ToggleRow';

const FilmsLayout = (props) => {
    return (
         <div className="films">
                {
                    props.films.length > 0 &&
                    <div>
                        <h2>Films</h2>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th width="185">Episode ID</th>
                                    <th>Film</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.films.map((film, i) => {
                                        return <tr key={ i }>
                                            <td colSpan={2}>
                                                <ToggleRow 
                                                    head={
                                                        <div className="row">
                                                            <div className="col-md-2">{film.episode_id}</div>
                                                            <div className="col-md-8">{film.title}</div>
                                                            <div className="col-md-2">
                                                            {
                                                                props.showViewLink &&
                                                                <Link className="btn btn-primary btn-sm" to={ `/page2/films/${film.id}` }>View Characters</Link>
                                                            }
                                                            </div>
                                                        </div>
                                                    }
                                                    body={
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <h4>Opening Crawl:</h4>
                                                                <p>{film.opening_crawl}</p>
                                                                <ul className="film-info list-unstyled">
                                                                    <li><strong>Url: </strong><span>{film.url}</span></li>
                                                                    <li><strong>Created: </strong><span>{ film.created }</span></li>
                                                                    <li><strong>Edited: </strong><span>{film.edited}</span></li>
                                                                    <li>
                                                                        <strong>Director: </strong>
                                                                        <span>{film.director}</span>
                                                                    </li>
                                                                    <li>
                                                                        <strong>Producer: </strong>
                                                                        <span>{film.producer}</span>
                                                                    </li>
                                                                    <li><strong>Release Date: </strong>{film.release_date}</li>
                                                                    <li><strong>Species: </strong>
                                                                        <span>{
                                                                            JSON.parse(film.species).map((item) => {
                                                                                return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                            })
                                                                    
                                                                        }</span>
                                                                    </li>
                                                                    <li>
                                                                        <strong>Starships: </strong>
                                                                        <span>{
                                                                            JSON.parse(film.starships).map((item) => {
                                                                                return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                            })
                                                                        
                                                                        }</span>
                                                                    </li>
                                                                    <li>
                                                                        <strong>Vehicles:</strong>
                                                                        <span>{
                                                                            JSON.parse(film.vehicles).map((item) => {
                                                                                return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                            })
                                                                        
                                                                        }
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <strong>Characters: </strong>
                                                                        <span>{
                                                                            JSON.parse(film.characters).map((item) => {
                                                                                return <Badge key={item} className="m-1"variant="secondary">{ item }</Badge>
                                                                            })
                                                                        
                                                                        }
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <strong>Planets: </strong>
                                                                        <span>{
                                                                            JSON.parse(film.planets).map((item) => {
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


export default FilmsLayout;