import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Layout from './layout/Layout'
import Contact from './pages/Contact'

const AppPages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Layout />
                        <Outlet />
                    </>
                }>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project" element={<Project />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppPages