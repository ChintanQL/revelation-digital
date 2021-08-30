import React, {Component} from 'react';
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

class Home extends Component {
	
	
	
	render() {
		
		return (
			<Layout>
				<>
				<Helmet>
					<title>Page title | Revelation Digital - Eye-Opening Programmatic Media</title>
				</Helmet>
				</>
			</Layout>	
		)
	}
}



export default Home