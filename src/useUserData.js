import { useEffect, useState } from "react";

const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        `https://give-me-users-forever.vercel.app/api/users/${startIndex}/next`
      );
      const data = await response.json();
      console.log(data.users);
      setUsers(data.users);
    }
    fetchUsers();
  }, [startIndex]);

  function handlePreviousClick() {
    setStartIndex(startIndex - 10);
  }

  function handleNextClick() {
    setStartIndex(startIndex + 10);
  }

  return [users, startIndex, handlePreviousClick, handleNextClick];
};

export default useUserData;
