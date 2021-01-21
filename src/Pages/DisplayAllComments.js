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

	// Fetch Comments
	const fetchComments = async () => {
		const res = await fetch('http://localhost:5000/comments')
		const data = await res.json()
	
		return data
	}
		
	return (
		<>	
			<div className='container mt-5'>
				<Comments comments={currentComments}/>
				<CommentsPagination 
					commentsPerPage={commentsPerPage} 
					totalComments={comments.length} 
					paginate={paginate} />
			</div>
		</>
	);
}

export default DisplayAllCommennts;