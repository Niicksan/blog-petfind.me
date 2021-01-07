import '../index.css';
import React from "react";
import { Card } from 'react-bootstrap';
import { users } from "../users";

export default class DisplayAllUsers extends React.Component {
	render() {
		return (
			<>
				<div class="main-users" >
					{users.map((userData) => {
						console.log(userData);
						return (
							<Card className="card" key={userData.id}>
                                <Card.Header><span className="bold">User Information: </span></Card.Header>
								<Card.Body>
									<Card.Text className="">
										<span className="bold">Name: </span>{userData.name}
									</Card.Text>
									<Card.Text className="">
                                        <span className="bold">Username: </span>{userData.username}
									</Card.Text>
									<Card.Text className="">
                                        <span className="bold">Email: </span>{userData.email}
									</Card.Text>
                                    <Card.Text className="">
                                        <span className="bold">Address: </span>
									</Card.Text>
                                    <Card.Text className="address">
                                        <span className="bold">Street: </span>{userData.address.street}
									</Card.Text>
                                    <Card.Text className="address">
                                        <span className="bold">Suite: </span>{userData.address.suite}
									</Card.Text>
                                    <Card.Text className="address">
                                        <span className="bold">City: </span>{userData.address.city}
									</Card.Text>
                                    <Card.Text className="address">
                                        <span className="bold">Zipcode: </span>{userData.address.zipcode}
									</Card.Text>
                                    <Card.Text className="address">
                                        <span className="bold">Geolocation:</span>
                                    </Card.Text>
                                    <Card.Text className="geo">
                                        <span className="bold">Latitude: </span>{userData.address.geo.lat}
                                    </Card.Text>    
                                    <Card.Text className="geo">
                                        <span className="bold">Longitude: </span>{userData.address.geo.lng}
                                    </Card.Text> 
								</Card.Body>
							</Card>
							);
						})
                    }
				</div>
			</>
		);
	}
}