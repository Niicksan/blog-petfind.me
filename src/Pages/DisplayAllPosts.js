import { useState, useEffect } from 'react';
import Posts from '../Pages/Posts'
import Pagination from '../Pages/Pagination'

const DisplayAllPosts = () => {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	//Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  
	//Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	//Getting all posts from the server
	useEffect(() => {
		const getPosts = async () => {
		  const postsFromServer = await fetchPosts()
		  setPosts(postsFromServer)
		}
	
		getPosts()
	}, [])

	// Fetch posts
	const fetchPosts = async () => {
		const res = await fetch('http://localhost:5000/posts')
		const data = await res.json()
	
		return data
	}
				
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