import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const getUrl = async (options) => {
    if (options) {
      const response = await axios.get(`${url}${options}`);
      setData((data) => [...data, { ...response.data, id: uuid() }]);
    } else {
      const response = await axios.get(`${url}`);
      setData((data) => [...data, { ...response.data, id: uuid() }]);
    }
  };
  const removeData = () => {
    setData([]);
  };
  return [data, getUrl, removeData];
};

export default useAxios;
