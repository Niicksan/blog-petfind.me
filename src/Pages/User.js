import { Card } from 'react-bootstrap';

const User = ({ name, username, email, street, suite, city, zipcode, lat, lng }) => {
    return (
        <>
            <Card className="card">
                <Card.Header>
                        <span className="bold">User Information: </span>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="">
                        <span className="bold">Name: </span>{name}
                    </Card.Text>
                    <Card.Text className="">
                        <span className="bold">Username: </span>{username}
                    </Card.Text>
                    <Card.Text className="">
                        <span className="bold">Email: </span>{email}
                    </Card.Text>
                    <Card.Text className="">
                         <span className="bold">Address: </span>
                    </Card.Text>
                    <Card.Text className="address">
                        <span className="bold">Street: </span>{street}
                    </Card.Text>
                    <Card.Text className="address">
                        <span className="bold">Suite: </span>{suite}
                    </Card.Text>
                    <Card.Text className="address">
                        <span className="bold">City: </span>{city}
                    </Card.Text>
                    <Card.Text className="address">
                        <span className="bold">Zipcode: </span>{zipcode}
                    </Card.Text>
                    <Card.Text className="address">
                        <span className="bold">Geolocation:</span>
                    </Card.Text>
                    <Card.Text className="geo">
                        <span className="bold">Latitude: </span>{lat}
                    </Card.Text>    
                    <Card.Text className="geo">
                        <span className="bold">Longitude: </span>{lng}
                    </Card.Text> 
                </Card.Body>
            </Card>
        </>
    )
}

export default User