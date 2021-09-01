import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import bg from "../images/hero/bg.jpg"
import smoke1 from "../images/hero/smoke1.png"
import devices from "../images/hero/devices.png"
import smoke2 from "../images/hero/smoke2.png"
import detective from "../images/hero/detective.png"
import flare from "../images/hero/flare.png"
import smoke3 from "../images/hero/smoke3.png"
import Testimonials from "../components/Common/Testimonials"
import GetTouch from "../components/Common/GetTouch"
import Parallax from 'parallax-js'

class Home extends Component {
	
	componentDidMount() {
		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene);
	}
	
	render() {
		var base = this.props.pageContext.Data.data.additional_data.Home;
		return (
			<Layout>
				<>
				<Helmet>
					<title>Page title | Revelation Digital - Eye-Opening Programmatic Media</title>
				</Helmet>
				<div className="hero-home">
					<div className="hero_parallax" id="scene">
						<div className="hero_layer hero_bg" style={{backgroundImage: "url("+bg+")"}} ></div>
						<div data-depth="0.3" className="hero_layer" style={{backgroundImage: "url("+smoke1+")"}} ></div>
						<div data-depth="0.20" className="hero_layer" style={{backgroundImage: "url("+devices+")"}}  ></div>
						<div data-depth="0.15" className="hero_layer" style={{backgroundImage: "url("+smoke2+")"}}  ></div>
						<div data-depth="0.06" className="hero_layer" style={{backgroundImage: "url("+detective+")"}}  ></div>
						<div data-depth="0.06" className="hero_layer hero_flare" style={{backgroundImage: "url("+flare+")"}}  ></div>
						<div data-depth="-0.50" className="hero_layer" style={{backgroundImage: "url("+smoke3+")"}} ></div>
					</div>
				</div>
				<div className="hero-home-title">
					<div className="text">
						<ReactWOW delay='0.4s' animation='fadeInUp'><h1 className=" " data-wow-delay="0.4s">{base.hero_title}</h1></ReactWOW>
						<ReactWOW delay='0.4s' animation='fadeInUp'><p className=" " data-wow-delay="0.8s">{base.hero_second_text}</p></ReactWOW>
					</div>
					<div className="line-vertical-center-wrapper">
						<div className="line-vertical-center is_active"></div>
					</div>
				</div>
				<div className="home-text-1">
					<div className="container">
						<ReactWOW  animation='fadeInLeft'><h2 className="" dangerouslySetInnerHTML={{ __html: base.intro_section_heading}} /></ReactWOW>
						<ReactWOW  animation='fadeInRight'><h3 className="" dangerouslySetInnerHTML={{ __html: base.intro_section_subheading}} /></ReactWOW>
						<div className="row row--100">
							<div className="col col--7 col--sm-12">
								<ReactWOW  animation='fadeInLeft'><p className="" dangerouslySetInnerHTML={{ __html: base.intro_section_paragraph}} /></ReactWOW>
							</div>
							<div className="col col--5 col--sm-12">
								<ReactWOW  animation='fadeInUp'><a href={base.intro_section_learn_more_link.url}  className="btn btn-purple">{base.intro_section_learn_more_link.title}</a></ReactWOW>
							</div>
						</div>
						<ReactWOW  animation='fadeInUp'><h4 className="hide--sm-down" dangerouslySetInnerHTML={{ __html: base.intro_section_welcome_text}} /></ReactWOW>
					</div>
				</div>
				<div className="home-solutions-intro">
					<div className="line-vertical-center-wrapper line-vertical-center-wrapper--top">
						<div className="line-vertical-center is_active"></div>
					</div>
					<div className="container">
						<div className="row row--65">
							<div className="col col--7 col--sm-12 pull-right" data-stellar-ratio="1.2">
								<ReactWOW  animation='fadeInLeft'><h2 className="" dangerouslySetInnerHTML={{ __html: base.intro_solutions_title}} /></ReactWOW>
							</div>
							<div className="col col--5 col--sm-12 intro_solutions_paragraph">
								<ReactWOW  animation='fadeInRight'><p className="" dangerouslySetInnerHTML={{ __html: base.intro_solutions_paragraph}} /></ReactWOW>
							</div>
						</div>
					</div>
				</div>
				{base.solutions_section.map((prop,i) => {return (
					<div className={(prop.image_position == "left") ? ("home-solutions-part home-solutions-part-alt") : ("home-solutions-part")}>
						<div className="img-wrapper stellar" data-stellar-ratio="1.6">
							<video src={prop.video.url} autoPlay playsInline muted loop></video>
						</div>
						<div className="container">
							<ReactWOW  animation={(prop.image_position == "left") ? ("fadeInRight") : ("fadeInLeft")}>
							<div className={(prop.image_position == "left") ? ("text Right") : ("text Left")} >
								<span dangerouslySetInnerHTML={{ __html: prop.text}} />
									<a href={prop.read_more_url} className="read-more">Read on</a>
							</div>
							</ReactWOW>
						</div>
					</div>
				)})}
				<Testimonials/>
				<GetTouch/>
				</>
			</Layout>	
		)
	}
}



export default Home