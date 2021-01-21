import { useState, useEffect } from 'react';
import Users from "./Users";
import Pagination from "./Pagination";

const DisplayAllUsers = () => {
    const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(10);

	//Get current users
	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  
	//Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	//Getting all users from the server
	useEffect(() => {
		const getUsers = async () => {
		    const usersFromServer = await fetchUsers()
		    setUsers(usersFromServer)
		}
	
		getUsers()
	}, [])

	// Fetch users
	const fetchUsers = async () => {
		const res = await fetch('http://localhost:5000/users')
		const data = await res.json()
	
		return data
    }
    
	return (
		<>         
            <div className='container mt-5'>
				<Users users={currentUsers}/>
				<Pagination 
					postsPerPage={usersPerPage} 
					totalPosts={users.length} 
					paginate={paginate} />
			</div>
        </>
	);

}

export default DisplayAllUsers;