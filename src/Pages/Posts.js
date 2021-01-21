import { useState, useEffect } from 'react';
import Post from "./Post";

const Posts = ({ posts }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
		const getUsers = async () => {
		  const postsFromServer = await fetchPosts()
		  setUsers(postsFromServer)
		}
	
		getUsers()
  }, [])
  
  // Fetch users
	const fetchPosts = async () => {
		const res = await fetch('http://localhost:5000/users')
		const data = await res.json()
	
		return data
	}

  return (
    <div className="main-posts" >
      {posts.map(post => (
        <Post 
          key={post.id}
          title={post.title}
          body={post.body}
          author={users.filter(function(u){return u.id === post.userId})[0].name}
        />
      ))}
    </div>
  );
};

export default Posts;