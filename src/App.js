import { useCallback, useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const incrementPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const decrementPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const getListOfData = useCallback(async () => {
    console.log(currentPage);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error("invalid");
      }
      const data = await response.json();
      const listOfData = data.data;
      console.log(listOfData);
      const personList = listOfData.map((individualPerson) => {
        return {
          id: individualPerson.id,
          email: individualPerson.email,
          firstName: individualPerson.first_name,
          lastName: individualPerson.last_name,
          image: individualPerson.avatar,
        };
      });
      console.log(personList);
      setTimeout(() => {
        setUserList(personList);
        setIsLoading(false);
      }, 300);
    } catch (error) {
      setError(error.message);
    }
  }, [currentPage]);
  useEffect(() => {
    getListOfData();
  }, [getListOfData]);
  // console.log(userList);

  return (
    <div className="App">
      <button onClick={getListOfData}>{currentPage}</button>
      <button onClick={incrementPage}>next</button>
      <button onClick={decrementPage}>back</button>

      {isLoading && <h2>Loading...</h2>}
    
      {userList.length === 0 && !error && <h3>No List of Users</h3>}

      {error && <h2>Error in link</h2>}

      {!isLoading && userList.length > 0 && <List userLists={userList} />}
    </div>
  );
}

export default App;
