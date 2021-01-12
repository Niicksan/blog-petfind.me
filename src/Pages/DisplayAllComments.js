import '../index.css';
import React from "react";
import Post from './Post'
import { Card} from 'react-bootstrap';
import { posts } from "../Jsons/posts.json";
import { users } from "../Jsons/users.json";
import { comments } from "../Jsons/comments.json";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

export default class DisplayAllCommennts extends React.Component {
	render() {
		const postsObject = posts;
		const usersObjects = users;
		const commentsObjects = comments;
		
		return (
			<>
				<div class="wrap">
                	<div class="grid-container">
						<div class="main-posts" >
							{commentsObjects.map((commentsData) => {
								return (
									<Router>
										<Card className="card" 
											key={commentsData.id}
											post={postsObject.find(post => post.id === commentsData.postId)}
											>
											<Link to="/posts/{postData.id}">
												<Card.Header>
													<span className="bold">{post.title}</span>
													</Card.Header>
												<Card.Body>
													<Card.Text className="">
														{commentsData.name}
													</Card.Text>
													<Card.Text className="">
														{commentsData.email}
													</Card.Text>
													<Card.Text className="">
														{postData.body}
													</Card.Text>
													<Card.Text className="">
														Posted By: {usersObjects.filter(function(el){return el.email === commentsData.email})[0].name}
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