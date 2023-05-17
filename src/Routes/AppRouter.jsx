import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flights from '../Components/Flights/Flights'
import Layout from '../Components/Layout/Layout'
import Home from '../Components/Home/Home'
import FlightSeats from '../Components/FlightSeats/FlightSeats'
import NotFound from '../Components/NotFound/NotFound'
export const AppRouter = () => {
  return (
    // <div>
    //     <BrowserRouter>
    //     <Routes>
    //       <Route path={"/"} element={<Layout />}>
    //         <Route index element={<Home />} />
    //         <Route path={":flights"} element={<Flights />}>
    //         </Route>
    //           <Route path='FlightSeats' element={<FlightSeats/>}/>
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>

<div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="flights/*" element={<Flights />} />
        <Route path="flights/seats" element={<FlightSeats />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
</div>
  )
}
