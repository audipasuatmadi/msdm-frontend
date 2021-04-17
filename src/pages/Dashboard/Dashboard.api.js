import {useEffect, useState} from 'react'
import Axios from 'axios'

export const useJobCountData = (min) => {
  const [jobCounts, setJobCounts] = useState([])
  
  useEffect(() => {
    const fetchDatas = async () => {
      let fetchedData;
      try {
        fetchedData = await Axios.get('http://localhost/msdm-backend/employees.php', {
          params: {
            code: 5,
            min: min? min : 0
          }
        })
      } catch (e) {
        console.log(e)
      }
      if (!fetchedData) return setJobCounts([]);
      setJobCounts(fetchedData.data.payload);
    }
    fetchDatas();
  }, [min])

  return jobCounts;
}
