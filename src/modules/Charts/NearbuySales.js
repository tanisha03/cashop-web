import React, {useEffect, useState} from 'react';
import Chart from '../../components/Chart'
import axios from 'axios';
import {API_CONSTANTS} from '../../config/API';

const baseURL = `${API_CONSTANTS.endpoint}/analytics/nearby-sales-insight/${API_CONSTANTS.userID}`;

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let data = response.data.responseObject.data;
      let cumulativeData= [];
      Object.keys(data).forEach((key) => {
        cumulativeData.push({
          labels: ['Others share', 'My share'],
          values: [data[key]['nearby-share'], data[key]['your-share']],
          header: key,
          type: 'pie'
        })
      });
      console.log(cumulativeData);
      setSalesData(cumulativeData);
    });
  }, []);

  return(
  <>
    {
      salesData && salesData.map(item => (
        // <Chart data={item}/> 
        <></>
      ))
  }
    {/* <div style={{width: "50%", height:"50%"}}>
        <Chart data={salesData}/>
    </div> */}
  </>
)};

export default SalesChart;