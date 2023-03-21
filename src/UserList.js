import useUserData from "./useUserData";

function UserList() {
  const [
    users,
    startIndex,
    handlePreviousClick,
    handleNextClick
  ] = useUserData();

  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user?.ID}>
            <div>
              <h3>{user?.JobTitle}</h3>
              <p>{user?.EmailAddress}</p>
              <p>{user?.FirstNameLastName}</p>
              <p>{user?.Phone}</p>
              <p>{user?.Company}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="button-container">
        {startIndex > 0 && (
          <button onClick={handlePreviousClick}>Previous</button>
        )}
        {users.length >= 10 && <button onClick={handleNextClick}>Next</button>}
      </div>
    </div>
  );
}

export default UserList;
