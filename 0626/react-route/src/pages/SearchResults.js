import React, { useEffect } from "react"
import { useLocation  } from "react-router-dom";


const SearchResult = () => {

  const location = useLocation();
  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams)
  const query = queryParams.get("query");

  useEffect(
    () => console.log(query),
    [query]);

  return (
    <div>
      <h1>검색결과</h1>
      <h3>검색어: {query} </h3>
    </div>
    )
}

export default SearchResult;