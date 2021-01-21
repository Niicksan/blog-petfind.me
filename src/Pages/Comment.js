import { Card } from 'react-bootstrap';

function Comment({ name, body, author}) {
    return (
        <>
            <Card className="card">
                <Card.Header>
                    <span className="bold">{name}</span>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="">
                        {body}
                    </Card.Text>
                    <Card.Text className="">
                    <span className="bold"> Posted by: </span>{author}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Comment
