import axios from 'axios';

export function fetchMyLocation(){
	return function(dispatch){
		axios.get('http://ipinfo.io')
		.then((mycity) => {
			axios.get('http://apidev.accuweather.com/locations/v1/search?q=' + mycity.data.city + '&apikey=hoArfRosT1215')
			.then((response) => {
				axios.get('http://apidev.accuweather.com/currentconditions/v1/' + response.data[0].Key + '.json?language=en&apikey=hoArfRosT1215')
				.then((response2) => {
					let finalResponse = [{location:response}, {weather:response2}];
					dispatch({type: 'FETCH_MYLOC_FULFILLED', payload: finalResponse})
				})
			})
			.catch((err) => {
				dispatch({type: 'FETCH_MYLOC_REJECTED', payload: err})
			})
		})
		.catch((err) => {
			dispatch({type: 'FETCH_MYLOC_REJECTED', payload: err})
		})
	}
}
