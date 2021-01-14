import '../index.css';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { jsonUsers } from "../Jsons/users.json";

const Posts = ({ posts }) => {
  const [users] = useState(jsonUsers); 

  return (
    <div class="main-posts" >
      {posts.map(post => (
        <Card className="card" key={post.id}>
          <Card.Header>
            <span className="bold">
              {post.title}
            </span>
          </Card.Header>
          <Card.Body>
			      <Card.Text className="">
              {post.body}
			    	</Card.Text>
			    	<Card.Text className="">
			    		Posted by: {users.filter(function(u){return u.id === post.userId})[0].name}
			    	</Card.Text>
			    </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Posts;