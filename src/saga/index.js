import {takeLatest, put, spawn, debounce, retry} from 'redux-saga/effects';
import { actions } from "../redux/servicesListReducer";
import { actionsDetails } from "../redux/servicesItemReducer";
import { getListServices, getDetailService } from "../api";


function* watchServicesListSaga() {
	yield takeLatest(actions.getServicesReq.type, handleServicesListSkillsSaga)
};

function* handleServicesListSkillsSaga() {
	try {
		const retryCount = 3;
		const retryDelay = 1 * 500;
		const data = yield retry(retryCount, retryDelay, getListServices);
		yield put(actions.servicesSuccess(data));
	} catch (e) {
		yield put(actions.servicesFailure(e.message));
	}
};

function* watchDetailServiceSaga() {
	yield takeLatest(actionsDetails.getServiceReq.type, handleDetailServiceSaga)
};

function* handleDetailServiceSaga() {
	try {
		const retryCount = 3;
		const retryDelay = 1 * 500;
		const data = yield retry(retryCount, retryDelay, getDetailService);
		yield put(actionsDetails.serviceSuccess(data));
	} catch (e) {
		yield put(actionsDetails.serviceFailure(e.message));
	}
};

export default function* saga() {
	yield spawn(watchServicesListSaga);
	yield spawn(watchDetailServiceSaga);
};
