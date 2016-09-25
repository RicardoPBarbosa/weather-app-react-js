import React from 'react';

export default class Weather extends React.Component{
	componentDidMount(){
		$(".weatherShow").addClass('animated fadeIn');
	}
	render(){
		if(Object.getOwnPropertyNames(this.props.weather).length === 0){
			return <div className="weatherShow"></div>
		}
		const location = this.props.weather[0].location.data[0];
		const weather = this.props.weather[1].weather.data[0];
		const locationCountry = location.Country.EnglishName;
		var dayTime = (weather.IsDayTime ? 'Day' : 'Night');
		if(weather.IsDayTime){
			// day icons
			switch(weather.WeatherText){
				case 'Sunny':
					var weatherIcon = <i class="wi wi-day-sunny"></i>
					break;
				case 'Mostly sunny':
					var weatherIcon = <i class="wi wi-day-sunny-overcast"></i>
					break;
				case 'Partly sunny':
					var weatherIcon = <i class="wi wi-day-sunny-overcast"></i>
					break;
				case 'Intermittent clouds':
					var weatherIcon = <i class="wi wi-day-cloudy-high"></i>
					break;
				case 'Clouds and sun':
					var weatherIcon = <i class="wi wi-day-sunny-overcast"></i>
					break;
				case 'Hazy sunshine':
					var weatherIcon = <i class="wi wi-day-haze"></i>
					break;
				case 'Mostly cloudy':
					var weatherIcon = <i class="wi wi-day-cloudy"></i>
					break;
				case 'Cloudy':
					var weatherIcon = <i class="wi wi-cloudy"></i>
					break;
				case 'Dreary':
					var weatherIcon = <i class="wi wi-cloudy"></i>
					break;
				case 'Fog':
					var weatherIcon = <i class="wi wi-fog"></i>
					break;
				case 'Showers':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Mostly cloudy w/ showers':
					var weatherIcon = <i class="wi wi-day-showers"></i>
					break;
				case 'Partly sunny w/ showers':
					var weatherIcon = <i class="wi wi-day-showers"></i>
					break;
				case 'Thunderstorm':
					var weatherIcon = <i class="wi wi-day-sleet-storm"></i>
					break;
				case 'Thundershower':
					var weatherIcon = <i class="wi wi-day-sleet-storm"></i>
					break;
				case 'Mostly cloudy w/ T-Storms':
					var weatherIcon = <i class="wi wi-day-sleet-storm"></i>
					break;
				case 'Partly sunny w/ T-Storms':
					var weatherIcon = <i class="wi wi-day-sleet-storm"></i>
					break;
				case 'Rain':
					var weatherIcon = <i class="wi wi-rain"></i>
					break;
				case 'Flurries':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Mostly cloudy w/ Flurries':
					var weatherIcon = <i class="wi wi-day-sleet"></i>
					break;
				case 'Partly sunny w/ Flurries':
					var weatherIcon = <i class="wi wi-day-sleet"></i>
					break;
				case 'Snow':
					var weatherIcon = <i class="wi wi-snow"></i>
					break;
				case 'Mostly cloudy w/ snow':
					var weatherIcon = <i class="wi wi-day-snow"></i>
					break;
				case 'Ice':
					var weatherIcon = <i class="wi wi-snowflake-cold"></i>
					break;
				case 'Sleet':
					var weatherIcon = <i class="wi wi-day-sleet"></i>
					break;
				case 'Freezing rain':
					var weatherIcon = <i class="wi wi-day-sleet"></i>
					break;
				case 'Rain and snow':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Rain/drizzle':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Hot':
					var weatherIcon = <i class="wi wi-hot"></i>
					break;
				case 'Cold':
					var weatherIcon = <i class="wi wi-snowflake-cold"></i>
					break;
				case 'Windy':
					var weatherIcon = <i class="wi wi-day-windy"></i>
					break;
				default:
					var weatherIcon = 'Erro';
					break;
			}
		}else{
			// night icons
			switch(weather.WeatherText){
				case 'Clear':
					var weatherIcon = <i class="wi wi-night-clear"></i>
					break;
				case 'Mostly clear':
					var weatherIcon = <i class="wi wi-night-partly-cloudy"></i>
					break;
				case 'Partly cloudy':
					var weatherIcon = <i class="wi wi-night-partly-cloudy"></i>
					break;
				case 'Intermittent clouds':
					var weatherIcon = <i class="wi wi-night-partly-cloudy"></i>
					break;
				case 'Hazy Moonlight':
					var weatherIcon = <i class="wi wi-night-partly-cloudy"></i>
					break;
				case 'Mostly Cloudy':
					var weatherIcon = <i class="wi wi-night-cloudy"></i>
					break;
				case 'Partly cloudy w/ showers':
					var weatherIcon = <i class="wi wi-night-showers"></i>
					break;
				case 'Mostly cloudy w/ showers':
					var weatherIcon = <i class="wi wi-night-showers"></i>
					break;
				case 'Partly cloudy w/ T-Storms':
					var weatherIcon = <i class="wi wi-night-alt-thunderstorm"></i>
					break;
				case 'Mostly cloudy w/ T-Storms':
					var weatherIcon = <i class="wi wi-thunderstorm"></i>
					break;
				case 'Mostly cloudy w/ Flurries':
					var weatherIcon = <i class="wi wi-night-sleet"></i>
					break;
				case 'Mostly cloudy w/ Snow':
					var weatherIcon = <i class="wi wi-night-snow-wind"></i>
					break;
				case 'Cloudy':
					var weatherIcon = <i class="wi wi-cloudy"></i>
					break;
				case 'Dreary':
					var weatherIcon = <i class="wi wi-cloudy"></i>
					break;
				case 'Fog':
					var weatherIcon = <i class="wi wi-fog"></i>
					break;
				case 'Showers':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Thunderstorm':
					var weatherIcon = <i class="wi wi-night-alt-sleet-storm"></i>
					break;
				case 'Thundershower':
					var weatherIcon = <i class="wi wi-night-alt-sleet-storm"></i>
					break;
				case 'Rain':
					var weatherIcon = <i class="wi wi-rain"></i>
					break;
				case 'Flurries':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Snow':
					var weatherIcon = <i class="wi wi-snow"></i>
					break;
				case 'Ice':
					var weatherIcon = <i class="wi wi-snowflake-cold"></i>
					break;
				case 'Sleet':
					var weatherIcon = <i class="wi wi-sleet"></i>
					break;
				case 'Freezing rain':
					var weatherIcon = <i class="wi wi-sleet"></i>
					break;
				case 'Rain and snow':
					var weatherIcon = <i class="wi wi-rain-mix"></i>
					break;
				case 'Hot':
					var weatherIcon = <i class="wi wi-hot"></i>
					break;
				case 'Cold':
					var weatherIcon = <i class="wi wi-snowflake-cold"></i>
					break;
				case 'Windy':
					var weatherIcon = <i class="wi wi-strong-wind"></i>
					break;
				default:
					var weatherIcon = 'Erro';
					break;
			}
		}
		if(dayTime == 'Day'){
			var style = {backgroundImage: "url(img/ny3.jpg)"};
		}else{
			var style = {backgroundImage: "url(img/ny4.jpg)"};
		}
		return(
			<div className="weatherShow" style={style}>
				<div>
					<h3>{location.EnglishName}</h3>
					<p id="country">{locationCountry}</p>
					<div className="weathInfo">
						<div>
							<p id="weathIcon">{weatherIcon}</p>
							<p id="weathText">{weather.WeatherText}</p>
						</div>
						<p id="weathValue">{weather.Temperature.Metric.Value} <span id="metric">ºC</span></p>
					</div>
				</div>
			</div>
		)
	}
}