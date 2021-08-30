import React, {Component} from 'react';
import Layout from "../components/layout"

class NotFoundPage extends Component {
	render() {
		return (
			<Layout>
				<h1>404: Not Found</h1>
				<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
			</Layout>
		)
	}
}

export default NotFoundPage


