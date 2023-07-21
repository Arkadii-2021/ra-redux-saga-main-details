import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import servicesListReducer from './redux/servicesListReducer';
import servicesItemReducer from './redux/servicesItemReducer';
import saga from './saga/index';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		servicesList: servicesListReducer,
		serviceItem: servicesItemReducer
	},
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga);
export default store;
