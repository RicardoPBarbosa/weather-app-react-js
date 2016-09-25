import React from 'react';

export default class IntroPage extends React.Component{
	componentDidMount(){
		$(".introPage").addClass('animated fadeIn');
	}

	render(){
		return(
			<div className="introPage">
				<h1>WeatherCheck</h1>
				<button className="transition" onClick={this.changePage.bind(this, 'myloc')}>My Location</button>
				<button className="transition" onClick={this.changePage.bind(this, 'searchloc')}>Search Location</button>
			</div>
		)
	}

	changePage(page){
		this.props.onPageChange(page);
		return false;
	}
}