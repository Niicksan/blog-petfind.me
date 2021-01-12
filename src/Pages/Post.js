import '../index.css';
import React from "react";
import { Card } from 'react-bootstrap';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        };
        
	render() {		
		return (
			<>
			    <div class="main-posts" >
			    	<Card className="card" >
                        <Card.Header>
			    			<span className="bold">{this.props.title}</span>
			    			</Card.Header>
			    		<Card.Body>
			    			<Card.Text className="">
                                {this.props.body}
			    			</Card.Text>
			    			<Card.Text className="">
			    				By: {this.props.name}
			    			</Card.Text>
			    		</Card.Body>
			    	</Card>
				</div>
			</>
		);
	}
}