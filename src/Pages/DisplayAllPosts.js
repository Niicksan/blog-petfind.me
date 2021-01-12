import '../index.css';
import React from "react";
import Post from './Post'
import { Card} from 'react-bootstrap';
import { posts } from "../Jsons/posts.json";
import { users } from "../Jsons/users.json";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export default class DisplayAllPosts extends React.Component {
	render() {
		const postsObject = posts;
		const usersObjects = users;
		
		return (
			<>
				<div class="wrap">
                	<div class="grid-container">
						<div class="main-posts" >
							{postsObject.map((postData) => {
								return (
									<Router>
										<Card className="card" 
											key={postData.id}
											post={postsObject.find(post => post.id === postData.id)}
											>
											<Link to="/posts/{postData.id}">
												<Card.Header>
													<span className="bold">{postData.title}</span>
													</Card.Header>
												<Card.Body>
													<Card.Text className="">
														{postData.body}
													</Card.Text>
													<Card.Text className="">
														By: {usersObjects.filter(function(el){return el.id === postData.userId})[0].name}
													</Card.Text>
												</Card.Body>
											</Link>
										</Card>
										
										<Route 
											path='/posts/{postData.id}'
											render={(props) => <Post {...props} 
												post={postsObject.find(post => post.id === postData.id)} 
												author={usersObjects.filter(function(el){return el.id === postData.userId})[0].name} 
										/>} />
									</Router>
									);
								})
							}
						</div>
					</div>
				</div>
			</>
		);
	}
}