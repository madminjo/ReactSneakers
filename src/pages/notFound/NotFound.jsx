import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
	return (
		<div className='notfound-page'>
			<div className='notfound-content'>
				<p className='code'>404</p>
				<h1>Page not found</h1>
				<p className='message'>
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className='buttons'>
					<Link to='/' className='home-btn'>
						Go back home
					</Link>
					<a href='#' className='support-btn'>
						Contact support →
					</a>
				</div>
			</div>
		</div>
	)
}

export default NotFound
