import React from 'react'
import moment from 'moment'

export default function Days({data}) {

  // console.log(data)


  return (
    <div className='days-weather'>
      {data.map((value)=>(
        <div className='day-1'>
        <br></br>
        <div className='day'>{moment(value.dt_txt).format('dddd')}</div><br></br>
        <div className='date-time'>{moment(value.dt_txt).format("MMM Do YYYY,h:mm a'")}</div><br></br>
        <div className='temperature'>{Math.round((value.main.temp-32)*100/1.8)/100}&#176;C </div><br></br>
        <div className='full-date'>
          {value.dt_txt.split(' ')[0].split('-')[2]}-
          {value.dt_txt.split(' ')[0].split('-')[1]}-
          {value.dt_txt.split(' ')[0].split('-')[0]}

        </div><br></br>
        <div className='weather-condition'>{value.weather[0].main}<br/>{value.weather[0].description}</div><br></br>
      </div>

      ))}
     </div>
  )
}
