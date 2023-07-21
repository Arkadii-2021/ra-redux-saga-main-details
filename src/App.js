import React from 'react';
import { Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import DetailService from "./components/DetailService";


export default function App() {
    return (
        <>
			<Routes>
				<Route path="/" element={<Services />}/>
				<Route path="/:id/details" element={<DetailService />}/>			
			</Routes>
	    </>
    );
}
