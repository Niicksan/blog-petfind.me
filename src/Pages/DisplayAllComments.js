import '../index.css';
import React, { useState } from 'react';
import Pagination from '../Pages/Pagination'
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
			<div class="wrap">
				<div class="grid-container">
					<Comments comments={currentComments}/>
					<Pagination 
						postsPerPage={commentsPerPage} 
						totalPosts={comments.length} 
						paginate={paginate} />
				</div>
			</div>
		</>
	);
}

export default DisplayAllCommennts;