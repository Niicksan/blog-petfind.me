import React, { useState, useEffect } from 'react';
import CommentsPagination from '../Pages/CommentsPagination'
import Comments from "./Comments";

const DisplayAllCommennts = () => {
	const [comments, setComments] = useState([]); 
	const [currentPage, setCurrentPage] = useState(1);
	const [commentsPerPage] = useState(25);

	console.log(comments);
		
	//Get current comments
	const indexOfLastComment = currentPage * commentsPerPage;
	const indexOfFirstComment = indexOfLastComment - commentsPerPage;
	const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

	//Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	//Getting all comments from the server
	useEffect(() => {
		const getComments = async () => {
		  const commentsFromServer = await fetchComments()
		  setComments(commentsFromServer)
		}
	
		getComments()
	}, [])

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