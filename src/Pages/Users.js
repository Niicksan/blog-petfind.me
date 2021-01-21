import User from "./User";

const Users = ({ users }) => {
  return (
    <div className="main-users" >
      {users.map(user => (
        <User 
          key={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          street={user.address.street}
          suite={user.address.suite}
          city={user.address.city}
          zipcode={user.address.zipcode}
          lat={user.address.geo.lat}
          lng={user.address.geo.lng}
        />
      ))}
    </div>
  );
};

export default Users;