import React from 'react';
import {connect} from 'react-redux';

import Weather from './Weather';
import LocationForm from './LocationForm';
import IntroPage from './IntroPage';

import {fetchWeather} from '../actions/weatherActions';
import {changePage} from '../actions/pageActions';
import {fetchMyLocation} from '../actions/myLocationActions';

@connect((store) => {
	return{
		weather: store.weather.weather,
		page: store.page.page,
		myloc: store.myloc.weather
	};
})

export default class App extends React.Component{
	componentWillMount(){
		this.props.dispatch(fetchMyLocation());
		this.props.dispatch(changePage({page: 'intro'}));
	}

	render(){
		const {weather, page, myloc} = this.props;
		if(page == 'searchloc'){
			var appPage = (
				<div className="weatherPage">
					<span className="goBack"><i onClick={this.goBack.bind(this)} className="fa fa-angle-left" aria-hidden="true"></i></span>
					<LocationForm onLocationChange={this.onLocationChange.bind(this)} />
					<Weather weather={weather} />
				</div>
			)
		}else if(page == 'myloc'){
			var appPage = (
				<div className="weatherPage">
					<span className="goBack"><i onClick={this.goBack.bind(this)} className="fa fa-angle-left" aria-hidden="true"></i></span>
					<Weather weather={myloc} />
				</div>
			)
		}else{
			var introPage = <IntroPage onPageChange={this.onPageChange.bind(this)} />
		}

		return(
			<div>
				{introPage}
				{appPage}
				<a className="transition" target="_blank" href="https://github.com/RicardoPBarbosa"><i className="fa fa-github" aria-hidden="true"></i> Visit my GitHub</a>
			</div>
		)
	}

	onLocationChange(location){
		this.props.dispatch(fetchWeather({location: location}));
	}

	onPageChange(page){
		this.props.dispatch(changePage({page: page}));
	}

	goBack(){
		this.props.dispatch(changePage({page: 'intro'}));
	}
}