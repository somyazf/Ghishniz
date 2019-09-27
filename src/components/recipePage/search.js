import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpoonacularApi = "94be430aadf644f6a8c8c95abbcce4c1";
const baseUrl = "https://api.spoonacular.com";
const imgUrl = "https://webknox.com/recipeImages/";

const useSpoonacularApi = () => {
    const [data, setData] = useState([]);
    const [totalResults, setTotalResults] = useState([]);
    const [url, setUrl] = useState(
        `${baseUrl}/recipes/search?apiKey=${SpoonacularApi}&query=beef&number=1000`,
    );
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
            const api_call = await axios(url);
            setData(api_call.data.results);
            setTotalResults(api_call.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchData();
      }, [url]);

    return [{ data, totalResults, isLoading, isError }, setUrl];
  }
export default useSpoonacularApi;