import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/servicesListReducer';
import ListServices from "./ListServices";
import BadRequest from "./BadRequest";


export default function Services() {
	const dispatch = useDispatch()
	const { items, loading, error } = useSelector(state => state.servicesList);
	
	const getServices = () => {
		dispatch(actions.getServicesReq())
	} 
	useEffect(getServices, [])

	return (
		<ul>
			<div>
				{loading && <img src="https://otkritkis.com/wp-content/uploads/2022/07/gufdh.gif" alt="Загрузка..."  width="128" />}
				{!loading && !error && items.map(({id, name, price}) => <ListServices id={id} name={name} price={price} key={id} /> )}
				{error && <BadRequest onClick={getServices} error={error} />}
			</div>
			
		</ul>
	)
};
