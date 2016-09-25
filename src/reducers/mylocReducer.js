const initialState = {
	weather:{},
	fetching: false,
	fetched: false,
	error: null
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case 'FETCH_MYLOC_REJECTED':
			return{...state, fetching: false, error: action.payload}
			break;
		case 'FETCH_MYLOC_FULFILLED':
			return{...state, fetching: false, fetched: true, weather: action.payload}
			break;
	}

	return state;
}