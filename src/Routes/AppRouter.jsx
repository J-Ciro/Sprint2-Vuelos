import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Flights from '../Components/Flights/Flights'
import Layout from '../Components/Layout/Layout'
import Home from '../Components/Home/Home'
export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={":flights"} element={<Flights />}>
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
