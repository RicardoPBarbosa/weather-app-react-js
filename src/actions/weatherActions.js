import axios from 'axios';

export function fetchWeather(location){
	return function(dispatch){
		axios.get('http://apidev.accuweather.com/locations/v1/search?q=' + location.location + '&apikey=hoArfRosT1215')
		.then((response) => {
			axios.get('http://apidev.accuweather.com/currentconditions/v1/' + response.data[0].Key + '.json?language=en&apikey=hoArfRosT1215')
			.then((response2) => {
				let finalResponse = [{location:response}, {weather:response2}];
				dispatch({type: 'FETCH_WEATHER_FULFILLED', payload: finalResponse})
			})
		})
		.catch((err) => {
			dispatch({type: 'FETCH_WEATHER_REJECTED', payload: err})
		})
	}
}
