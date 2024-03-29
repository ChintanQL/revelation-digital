import React, {Component} from 'react';
import axios from "axios"
import Slider from "react-slick";
import ReactWOW from 'react-wow'
import LazyLoad from 'react-lazyload';
class Testimonials extends Component {
	
	
	state = {
        pagedata: [],
		showInfo: 0,
		show: false
		
    };
	componentDidMount() {
		
		var url = "https://development.revelation.digital/wp-json/newrd/v1/rd_testimonial";
		axios.get(url).then(e => {
			this.setState({pagedata: e.data.ResponseData})
			this.setState({showInfo: 1})
		})
    }
	render() {
		
		var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
		return (
			<div className="home-testimonials">
				<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top-over">
					<div className="line-vertical-center"></div>
				</div>
				<div className="diagonal-line"></div>
				<div className="container">
					<ReactWOW  animation='fadeInLeft'>
					<div className="text">
					{(this.state.showInfo === 1) ? (<h2 dangerouslySetInnerHTML={{ __html: this.state.pagedata.title}} />) : ("")}
						
					</div>
					</ReactWOW>
				</div>
				<div className="testimonials-slider">
					{(this.state.showInfo === 1) ? (
						
						<Slider {...settings}>
						{this.state.pagedata.slider.map((prop,i) => {return (
						<div className="slide">
							<LazyLoad height={200}  >
							<div className="container">
								<div className="img stellar testimonial_hero" data-stellar-ratio="1.1">
									<img className="pull-right" src={prop.img} />
								</div>
								<ReactWOW  animation='fadeInUp'>
								<div className="text">
									<h4>{prop.title}</h4>
									<span dangerouslySetInnerHTML={{ __html: prop.content}}/>
									<a href={prop.link} className="read-more">SEE THE STORY</a>
								</div>
								</ReactWOW>
							</div>
							</LazyLoad>
						</div>
						)})}
						</Slider>
						
					) : ("")}
					
				</div>
			</div>
		)
	}
}



export default Testimonials
