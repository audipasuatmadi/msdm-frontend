import { useEffect, useState } from 'react';
import Axios from 'axios';

export const useJobCountData = (min, max) => {
  const [jobCounts, setJobCounts] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      let fetchedData;
      try {
        fetchedData = await Axios.get(
          'http://localhost/msdm-backend/employees.php',
          {
            params: {
              code: 5,
              min: min ? min : 0,
              max: max ? max : 1000
            },
          }
        );
        console.log(max, fetchedData)
      } catch (e) {
        console.log(e.response);
      }
      if (!fetchedData) return setJobCounts([]);
      setJobCounts(fetchedData.data.payload);
    };
    fetchDatas();
  }, [min, max]);

  return jobCounts;
};
