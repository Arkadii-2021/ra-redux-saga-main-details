import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actionsDetails } from '../redux/servicesItemReducer';
import { Link, useParams } from "react-router-dom";
import BadRequest from "./BadRequest";


export default function DetailService() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const { item, loading, error } = useSelector(state => state.serviceItem);
	window.localStorage.setItem('id', id);
	const getServices = () => {
		dispatch(actionsDetails.getServiceReq())
	};
	useEffect(getServices, []);

	return (
		<>
		{loading && <img src="https://otkritkis.com/wp-content/uploads/2022/07/gufdh.gif" alt="Загрузка..."  width="128" />}
		{!loading && !error && <div>
				<div className="name__service">{item.name}</div>
				<div>&#9679; <b>Стоимость:</b> {item.price} &#8381;</div>
				<div className="desciption__service">&#9679; <b>Подробное описание:</b> {item.content}</div></div>}
		{error && <BadRequest onClick={getServices} error={error} />}
		<p><Link to="/">Вернуться к списку</Link></p>
		</>
	)
};
