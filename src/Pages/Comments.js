import '../index.css';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const Comments = ({ comments }) => {

  return (
    <div class="main-posts" >
        {comments.map(comment => (
            <Card className="card" key={comment.id}>
                <Card.Header>
                    <span className="bold">{comment.name}</span>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="">
                        {comment.body}
                    </Card.Text>
                    <Card.Text className="">
                    <span className="bold"> Posted by: </span>{comment.email}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))}
    </div>
  );
};

export default Comments;