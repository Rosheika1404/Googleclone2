import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "6f54e46a7eb7de42c";

//custom hook - it returns an object
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //term = what is typed into the search bar/ is a data layer variable
  //when the term changes
  //async fetch/function is needed
  //google api website - pass in API_KEY, pass in Context (Search Engine), and pass in term

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
