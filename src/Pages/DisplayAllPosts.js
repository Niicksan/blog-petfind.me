import React, { useState } from 'react';
import Posts from '../Pages/Posts'
import Pagination from '../Pages/Pagination'
import { jsonPosts } from "../Jsons/posts.json";

const DisplayAllPosts = () => {
	const [posts] = useState(jsonPosts); 
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	//Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
   
	//Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);
				
	return (
		<>
			<div className='container mt-5'>
				<Posts posts={currentPosts}/>
				<Pagination 
					postsPerPage={postsPerPage} 
					totalPosts={posts.length} 
					paginate={paginate} />
   		 	</div>
		</>
	);
}

export default DisplayAllPosts;