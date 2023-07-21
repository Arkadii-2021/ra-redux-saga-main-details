import { createSlice } from "@reduxjs/toolkit";


const serviceItemSlice = createSlice({
	name: "serviceItem",
	initialState: {
		item: [],
		loading: false,
		error: null
	},
	reducers: {
		getServiceReq(state) { 
			return { ...state, loading: true, error: null }
		},
		serviceFailure(state, { payload }) { 
			const error = payload
			return { ...state, loading: false, error}  
		},
		serviceSuccess(state, { payload }) { 
			const item = payload
			return { item, loading: false, error: null }
		}
	}
});

export const actionsDetails = serviceItemSlice.actions;
export default serviceItemSlice.reducer;

