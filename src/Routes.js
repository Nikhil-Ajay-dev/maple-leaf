import React from "react";
import HomePage from "./Home/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function RoutesComponent() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomePage />} path="/" />

                </Routes>
            </BrowserRouter>
        </>
    )
}