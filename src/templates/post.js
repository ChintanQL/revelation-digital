import React, {Component} from 'react';
import ReactWOW from 'react-wow'
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import GetTouchDiff from "../components/Common/GetTouchDiff"
import { Link} from 'gatsby'
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';
import Counter from 'react-number-counter'
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';

class Post extends Component {
	
	constructor(props) {
    super(props);
   
  }
	
	
	
	
	render() {
		console.log(this.props.pageContext.Data);
		
		return (
		
			<Layout>
				<>
				<Helmet>
					<title>{this.props.pageContext.Data.title} . Revelation Digital </title>
					<meta name="title" content={this.props.pageContext.Data.title}></meta>
				<meta name="description" content={this.props.pageContext.Data.meta}></meta>
				 <meta name="keywords" content=""></meta>

				<meta property="og:type" content="website"></meta>
				<meta property="og:title" content={this.props.pageContext.Data.title}></meta>
				<meta property="og:description" content={this.props.pageContext.Data.meta}></meta>

				<meta property="twitter:card" content="summary_large_image"></meta>
				<meta property="twitter:title" content={this.props.pageContext.Data.title}></meta>
				<meta property="twitter:description" content={this.props.pageContext.Data.meta}></meta>	
				</Helmet>
				<div className="simple-hero">
							<div className="cloud-left"><img src={cloud1} alt="" /></div>
							<div className="cloud-right"><img src={cloud2} alt="" /></div>
							<div className="container">
								<h1 className="text-bebas text-bebas--big">{this.props.pageContext.Data.title}</h1>
							</div>
						</div>
	
						<div className="section section--normal-margin default-page">
	<div className="container container-small">
							<div className="row">
							<div className="col-lg-12 text-center mb50">
	{(this.props.pageContext.Data.image != "") ? (<><img class="img-fluid"  src={this.props.pageContext.Data.image} /></>) : ("")}
							</div>
	</div>
</div>
							<div className="container container-small">
								<div className="text-area blogcontent" dangerouslySetInnerHTML={{ __html: this.props.pageContext.Data.content}} />
									
							</div>
						</div>
				
				<GetTouchDiff/>
				</>
			</Layout>
			
		)
		
	}
	
}

export default Post
