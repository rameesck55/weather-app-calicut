import './Root.css'
import Days from './Days'
import axios from 'axios';
import { url } from './const';
import { useEffect, useState } from 'react';
import date from 'date-and-time';





function Root() {


  const[dates,setdates]=useState([])
  useEffect(()=>{
    axios.get(`${url}`).then((response)=>{
      // console.log(response.data.list)
      const reqdata=response.data.list.filter((dit)=>
      dit.dt_txt.includes("12:00:00")
      );
      setdates(reqdata);
      console.log(reqdata);
      // console.log(dates)
    })
  
  },[]
  )


  const now = new Date();
  








    return (

      <div>

          <div className="root-body">
            <div className="header">
              <h1 className="heading">5-Day Forecast</h1>
            </div>
            <div className="root-footer">
              <h4 className='footer-font'>Calicut , IN  {date.format(now, 'DD-MM-YYYY')}</h4>
              <hr></hr>
            </div>
          </div>


         
          <Days data={dates} />    


          




      </div>
      
     
      
    );
  }
  
  export default Root;