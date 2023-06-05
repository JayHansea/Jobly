import { useState, useEffect } from "react";
import axios from "axios";
import db from "../components/db/db";

const useFetch = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const data = db;
  const [isLoading] = useState(false);
  const [error] = useState(null);

  // const options = {
  //   method: 'GET',
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     'X-RapidAPI-Key': 'ad9a71df37msh00fef51111d338ep18b91ajsnde6d2a9d95e7',
  //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //   },
  //   params: { ... query }
  // };
  


  // const fetchData = async () => {
  //   setIsLoading(true);

  //   try {
  //     const response = await request(options);

  //     setData(response.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     console.log(error)
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const refetch = () => {
  //   setIsLoading(true);
  //   fetchData();
  // };

  // return { data, isLoading, error, refetch };
  return { data, isLoading, error };
};

export default useFetch;
