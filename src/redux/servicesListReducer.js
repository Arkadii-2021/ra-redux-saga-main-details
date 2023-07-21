import { createSlice } from "@reduxjs/toolkit";


const servicesSlice = createSlice({
	name: "servicesList",
	initialState: {
		items: [],
		loading: false,
		error: null
	},
	reducers: {
		getServicesReq(state) { 
			return { ...state, loading: true, error: null }
		},
		servicesFailure(state, { payload }) { 
			const error = payload
			return { ...state, loading: false, error}  
		},
		servicesSuccess(state, { payload }) { 
			const items = payload
			return { items, loading: false, error: null }
		}
	}
});

export const actions = servicesSlice.actions;
export default servicesSlice.reducer;
