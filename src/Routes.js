import React from "react";
import HomePage from "./Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Home/About";
import Services from "./Home/Services";


export default function RoutesComponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<About />} path="/about" />
                    <Route element={<Services />} path="/services" />

                </Routes>
            </BrowserRouter>
        </>
    )
}