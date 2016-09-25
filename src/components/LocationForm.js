import React from 'react';

export default class LocationForm extends React.Component{
	componentDidMount(){
		$("#searchCity").focus();
		$(".searchForm").addClass('animated fadeIn');
	}

	render(){
		return(
			<div className="searchForm">
				<form onSubmit={this.changeLocation.bind(this)}>
					<input type="text" ref="location" placeholder="Enter a city name ..." id="searchCity" autoComplete="off" />
				</form>
			</div>
		)
	}

	changeLocation(e){
		e.preventDefault();
		let location = this.refs.location.value;
		this.refs.location.value = '';
		this.props.onLocationChange(location);
		return false;
	}
}