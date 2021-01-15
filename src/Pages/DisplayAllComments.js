import React, { useState } from 'react';
import CommentsPagination from '../Pages/CommentsPagination'
import Comments from "../Pages/Comments";
import { jsonComments } from "../Jsons/comments.json";

const DisplayAllCommennts = () => {
	const [comments] = useState(jsonComments); 
	const [currentPage, setCurrentPage] = useState(1);
	const [commentsPerPage] = useState(25);
		
	//Get current comments
	const indexOfLastComment = currentPage * commentsPerPage;
	const indexOfFirstComment = indexOfLastComment - commentsPerPage;
	const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

	//Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);
		
	return (
		<>
			<div className="wrap">
				<div className="grid-container">
					<Comments comments={currentComments}/>
					<CommentsPagination 
						commentsPerPage={commentsPerPage} 
						totalComments={comments.length} 
						paginate={paginate} />
				</div>
			</div>
		</>
	);
}

export default DisplayAllCommennts;