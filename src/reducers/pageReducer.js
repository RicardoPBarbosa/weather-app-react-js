const initialState = {
	page: ''
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case 'FETCH_PAGE':
			return{...state, page: action.payload}
			break;
	}

	return state;
}