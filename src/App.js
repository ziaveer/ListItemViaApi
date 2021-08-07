import { useCallback, useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import { Grid } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import PageNumber from "./components/PageNumber";

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  const getListOfData = useCallback(async () => {
  
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://reqres.in/api/users?page=${currentPage}`
      );
      if (!response.ok) {
        throw new Error("invalid");
      }
      const data = await response.json();
  
      setTotalPage(data.total_pages);
      const listOfData = data.data;
  
      const personList = listOfData.map((individualPerson) => {
        return {
          id: individualPerson.id,
          email: individualPerson.email,
          firstName: individualPerson.first_name,
          lastName: individualPerson.last_name,
          image: individualPerson.avatar,
        };
      });
  

      setUserList(personList);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, [currentPage]);
  useEffect(() => {
    getListOfData();
  }, [getListOfData]);
  

  return (
    <Grid container direction="row" spacing={5}>
      <Grid container direction="column" item alignItems="center">
        <Grid item sm={4} />
        <Grid item sm={4} xs={12}>
          <PageNumber count={totalPage} onPageChange={handlePage} />
        </Grid>
        <Grid item sm={4} />
      </Grid>

      <Grid container>
        <Grid item sm={2} />

        <Grid item xs={12} sm={8}>
          {isLoading && <CircularProgress color="secondary" />}

          {userList.length === 0 && error && isLoading && (
            <h3>No List of Users</h3>
          )}

          {error && <h2>Error in link</h2>}

          {!isLoading && userList.length > 0 && <List userLists={userList} />}
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
