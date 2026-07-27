import React from "react";
import HomePage from "./Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Home/About";
import Services from "./Home/Services";
import ServicesChildren from "./Home/ServicesChildren";


export default function RoutesComponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />
                    <Route element={<About />} path="/about" />
                    <Route element={<Services />} path="/services" />
                    <Route element={<ServicesChildren />} path="/anti-graffiti" />
                    <Route element={<ServicesChildren />} path="/blinds" />
                    <Route element={<ServicesChildren />} path="/custom-printed-plotted-film" />
                    <Route element={<ServicesChildren />} path="/daylight-redirection" />
                    <Route element={<ServicesChildren />} path="/decorative-tinting" />
                    <Route element={<ServicesChildren />} path="/feather-friendly" />
                    <Route element={<ServicesChildren />} path="/heat-control" />
                    <Route element={<ServicesChildren />} path="/privacy-film" />
                    <Route element={<ServicesChildren />} path="/security-film" />
                    <Route element={<ServicesChildren />} path="/solar-film" />
                    <Route element={<ServicesChildren />} path="/wall-graphics" />
                    <Route element={<ServicesChildren />} path="/way-finding" />
                </Routes>
            </BrowserRouter>
        </>
    )
}